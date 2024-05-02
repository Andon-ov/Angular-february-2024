import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { combineReducers, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';



import { appInterceptor } from './app.interceptor';

import { reducers as userReducers } from './+store';
import { IThemeState, reducers as themeReducers } from './theme/+store';
import { IUserState, reducers as productReducers } from './user/+store'; 


// const appReducers = combineReducers({
//   user: userReducers,
//   theme: themeReducers,
//   product: productReducers
// });


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([appInterceptor])),
    provideStore(),
 

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
