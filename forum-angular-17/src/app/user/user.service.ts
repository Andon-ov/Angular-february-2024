import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../shared/types/user';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RootState } from '../+store';
import { Store } from '@ngrx/store';

import {
  login,
  register,
  authenticate,
  logout,
  updateUser,
} from '../+store/actions';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser$ = this.store.select((state) => state.auth.currentUser);

  isReady$ = this.currentUser$.pipe(
    map((currentUser) => currentUser !== undefined)
  );
  
  isLogged = this.currentUser$.pipe(map((currentUser) => currentUser !== null));

  // currentUser!: User | null;

  // get isLogged(): boolean {
  //   return !!this.currentUser;
  // }

  constructor(private http: HttpClient, private store: Store<RootState>) {}

  getCurrentUserProfile(): Observable<any> {
    return this.http
      .get<User>(`${apiUrl}/users/profile`)
      .pipe(tap((user: User) => this.store.dispatch(updateUser({ user }))));
  }

  updateProfile(data: any): Observable<any> {
    return this.http
      .put<User>(`${apiUrl}/users/profile`, data)
      .pipe(tap((user: User) => this.store.dispatch(updateUser({ user }))));
  }

  login(data: any): Observable<any> {
    return this.http
      .post<User>(`${apiUrl}/users/login`, data)
      .pipe(tap((user: User) => this.store.dispatch(login({ user }))));
  }

  register(data: any): Observable<any> {
    return this.http
      .post<User>(`${apiUrl}/users/register`, data)
      .pipe(tap((user: User) => this.store.dispatch(register({ user }))));
  }

  logout(): Observable<any> {
    return this.http
      .post(`${apiUrl}/users/logout`, {})
      .pipe(tap(() => this.store.dispatch(logout())));
  }

  authenticate(): Observable<any> {
    return this.http.get<User>(`${apiUrl}/users/profile`).pipe(
      tap((user: User) => this.store.dispatch(authenticate({ user })))
      // catchError(() => {
      //   this.store.dispatch(authenticate({ user: null }));
      //   return [null];
      // })
    );
  }
}
