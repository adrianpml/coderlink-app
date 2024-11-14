import { HttpInterceptorFn } from '@angular/common/http';

export const tokenjwtInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
