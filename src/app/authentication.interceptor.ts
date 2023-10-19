import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() { }

  candidate: string = "Koya Dzogbema"

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthorization(request));
  }
  addAuthorization(request: HttpRequest<unknown>): HttpRequest<any> {
    return request.clone({ setHeaders: { token: environment.Token, candidate: this.candidate } })
  }


}
