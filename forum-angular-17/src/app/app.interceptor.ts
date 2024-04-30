import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const API = 'api';
  const { apiUrl } = environment;

  if (req.url.startsWith(API)) {
    console.log('here');
    console.log(req);

    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials: true,
    });
  }
  return next(req);
};
