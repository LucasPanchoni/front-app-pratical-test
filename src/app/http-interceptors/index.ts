import { AuthInterceptor } from './auth-interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
];
