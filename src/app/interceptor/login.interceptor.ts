import { HttpEventType, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {

  const auth = inject(AuthService)

  const isLoginRequest = req.url.toUpperCase().includes('LOGIN');
  return next(req);

};
