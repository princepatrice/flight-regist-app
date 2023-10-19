import { Component } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  loginFailed: boolean = false

  constructor(private _authService: AuthentificationService, private _formBuilder: FormBuilder,
    private _router: Router) {
    this.form = this.form = this._formBuilder.group({
      email: "",
      password: ""
    })
  }

  onSubmit() {
    const email = this.form.value.email
    const password = this.form.value.password
    this._authService.login(email, password).then((res => {
      this.loginFailed = false
      setTimeout(() => {
        this._router.navigate(["/flight-registration"])
      }, 500)
    })).catch((err) => {
      this.loginFailed = true
    })
  }
}
