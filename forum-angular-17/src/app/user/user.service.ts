import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IUser } from '../shared/types/user';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IRootState } from '../+store';
import { Store } from '@ngrx/store';

import {
  login,
  register,
  authenticate,
  logout,
  updateUser,
} from '../+store/actions';
import { AuthService } from '../core/auth.service';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})


export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get<IUser>(`api/users/profile`).pipe(
      tap((user: IUser) => this.authService.updateCurrentUser(user))
    );
  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.put<IUser>(`api/users/profile`, data).pipe(
      tap((user: IUser) => this.authService.updateCurrentUser(user))
    );
  }
}



// export class UserService {
//   currentUser$ = this.store.select((state) => state.auth.currentUser);

//   isReady$ = this.currentUser$.pipe(
//     map((currentUser) => currentUser !== undefined)
//   );

//   isLogged$ = this.currentUser$.pipe(
//     map((currentUser) => currentUser !== null)
//   );

//   constructor(private http: HttpClient, private store: Store<IRootState>) {}

//   getCurrentUserProfile(): Observable<any> {
//     return this.http
//       .get<IUser>(`api/profile`)
//       .pipe(tap((user: IUser) => this.store.dispatch(updateUser({ user }))));
//   }

//   updateProfile(data: any): Observable<any> {
//     return this.http
//       .put<IUser>(`api/profile`, data)
//       .pipe(tap((user: IUser) => this.store.dispatch(updateUser({ user }))));
//   }

//   login(data: any): Observable<any> {
//     return this.http
//       .post<IUser>(`api/login`, data)
//       .pipe(tap((user: IUser) => this.store.dispatch(login({ user }))));
//   }

//   register(data: any): Observable<any> {
//     return this.http
//       .post<IUser>(`api/register`, data)
//       .pipe(tap((user: IUser) => this.store.dispatch(register({ user }))));
//   }

//   logout(): Observable<any> {
//     return this.http
//       .post(`api/logout`, {})
//       .pipe(tap(() => this.store.dispatch(logout())));
//   }

//   authenticate(): Observable<any> {
//     return this.http
//       .get<IUser>(`api/profile`)
//       .pipe(tap((user: IUser) => this.store.dispatch(authenticate({ user }))));
//   }
// }
