import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './+store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(reducers),
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
