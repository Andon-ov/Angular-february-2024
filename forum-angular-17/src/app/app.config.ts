import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';

import {reducers as themeReducers} from './theme/+store';
import {reducers as userReducers} from './user/+store';
import {reducers as authReducers} from './+store';


import {appInterceptor} from './app.interceptor';


const appReducers = {
  ...themeReducers,
  ...userReducers,
  ...authReducers,
};



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([appInterceptor])),

    // provideStore(reducers),
    provideStore(appReducers),


    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ], // adding provide here
    // and connect +store after install ng add @ngrx/store-devtools@latest
};

// providers: [
//   importProvidersFrom(HttpClientModule),
//   provideRouter(
//     APP_ROUTES,
//     withPreloading(PreloadAllModules),
//     withDebugTracing()
//   ),

//   // Setup NGRX:
//   provideStore(reducer),
//   provideEffects([]),
//   provideStoreDevtools(),

//   importProvidersFrom(TicketsModule),
//   provideAnimations(),
//   importProvidersFrom(LayoutModule),
// ];
