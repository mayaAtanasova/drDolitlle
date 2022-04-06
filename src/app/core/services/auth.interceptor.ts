import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    const token = this.token.getToken();
    if(token != null) {
      authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, token)})
    }
    return next.handle(request);
  }
}
