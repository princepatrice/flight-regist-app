import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { ErrorComponent } from './error/error.component';

import { routes } from './app.routes';
import {AngularFireAuthModule} from "@angular/fire/compat/auth"
import {AngularFireStorageModule} from "@angular/fire/compat/storage"
import { AngularFireDatabaseModule} from "@angular/fire/compat/database"
import { AngularFireModule}  from "@angular/fire/compat"
import { environment } from 'src/environments/environment.development';
import { AuthenticationInterceptor } from './authentication.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlightFormComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthenticationInterceptor, multi:true}],
  bootstrap: [AppComponent]

})
export class AppModule { }
