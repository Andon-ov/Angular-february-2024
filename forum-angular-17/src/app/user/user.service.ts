import {Injectable} from '@angular/core';
import {IUser} from '../shared/types';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {IRootState} from '../+store';
import {Store} from '@ngrx/store';

import {updateUser,} from '../+store/actions';

// const apiUrl = environment.apiUrl;

// @Injectable({
//   providedIn: 'root',
// })


// export class UserService {

//   constructor(
//     private http: HttpClient,
//     private authService: AuthService
//   ) { }

//   getCurrentUserProfile(): Observable<any> {
//     return this.http.get<IUser>(`api/users/profile`).pipe(
//       tap((user: IUser) => this.authService.updateCurrentUser(user))
//     );
//   }

//   updateProfile(data: any): Observable<IUser> {
//     return this.http.put<IUser>(`api/users/profile`, data).pipe(
//       tap((user: IUser) => this.authService.updateCurrentUser(user))
//     );
//   }
// }

@Injectable({
  providedIn: 'root',
})


export class UserService {
  constructor(private http: HttpClient, private store: Store<IRootState>) {}

  getCurrentUserProfile(): Observable<any> {
    return this.http
      .get<IUser>(`api/users/profile`)
      .pipe(tap((user: IUser) => {
        console.log(user, "getCurrentUserProfile()")
        this.store.dispatch(updateUser({user}))
      }));
  }

  updateProfile(data: any): Observable<any> {
    return this.http
      .put<IUser>(`api/user/profile`, data)
      .pipe(tap((user: IUser) => {
        console.log(user, "updateProfile()", data)
        this.store.dispatch(updateUser({user}))
      }));
  }


}
