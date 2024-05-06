import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const API = 'api';
  const { apiUrl } = environment;

  if (req.url.startsWith(API)) {
    console.log(req);

    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials: true,
    });
  }
  return next(req);
};


// req = req.clone({ url: `${this.baseUrl}${req.url.replace(`${USE_BASE_URL}/`, '')}` });
// }
// if (!withoutApiUrl && !req.url.includes('http')) {
//   req = req.clone({ url: `${this.apiUrl}${req.url}`, withCredentials: true });
// }
// return next.handle(req);
// }
