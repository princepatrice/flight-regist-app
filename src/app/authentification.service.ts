import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  userInfo: Subject<any> = new Subject<any>()

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if(user){
        this.userInfo.next(user)
        localStorage.setItem("user", JSON.stringify(user))
      }else{
        this.userInfo.next(null)
        localStorage.removeItem("user")
      }
    })
  }

  async login(email: string, password: string): Promise<any> {
    return await this,this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logout(): Promise<void> {
    return this.afAuth.signOut().then(()=>{
      localStorage.removeItem("user")
    });
  }

  get isLoggedIn(): boolean{
      const user = JSON.parse(localStorage.getItem("user")!)
      return user!==null
  }

}
