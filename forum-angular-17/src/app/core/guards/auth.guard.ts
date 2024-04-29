// import { CanActivateFn, Router } from '@angular/router';

// import { Observable, of } from 'rxjs';
// import { map, tap } from 'rxjs/operators';
// import { UserService } from '../../user/user.service';
// import { User } from '../../shared/types/user';
// import { inject } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   const userService = inject(UserService);
//   const router = inject(Router);

//   let stream$: Observable<User | null >;

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
