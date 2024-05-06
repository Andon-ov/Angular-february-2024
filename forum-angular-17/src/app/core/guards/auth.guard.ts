// import { CanActivateFn, Router } from '@angular/router';

// import { Observable, of } from 'rxjs';
// import { map, tap } from 'rxjs/operators';
// import { UserService } from '../../user/user.service';
// import { IUser } from '../../shared/types/user';
// import { inject } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {

//   const userService = inject(UserService);
//   const router = inject(Router);

//   let stream$: Observable<IUser | null >;

//   if (userService.currentUser$ === undefined) {
//     stream$ = userService.getCurrentUserProfile();
//   } else {
//     stream$ = of(userService.currentUser$);
//   }

//   return stream$.pipe(
//     map((user) => {
//       const isLoggedFromData = route.data['isLogged'];
//       return (
//         typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user
//       );
//     }),
//     tap((canContinue) => {
//       if (!canContinue) {
//         const url = state.url;
//         console.error('Unauthorized access attempt. Redirecting...');
//         router.navigateByUrl(url);
//       }
//     })
//   );
// };
import {CanActivateFn, Router} from '@angular/router';
import {of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {UserService} from '../../user/user.service';
import {inject} from '@angular/core';
import {AuthService} from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const userService = inject(UserService);
  const router = inject(Router);

  return authService.currentUser$.pipe(
    switchMap(user => {
      if (user === null || user === undefined) {
        return userService.getCurrentUserProfile();
      } else {
        return of(user);
      }
    }),
    map((user) => {
      const isLoggedFromData = route.data['isLogged'];
      return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
    }),
    tap((canContinue) => {
      if (!canContinue) {
        const url = state.url;
        console.error('Unauthorized access attempt. Redirecting...');
        router.navigateByUrl(url);
      }
    })
  );
};
