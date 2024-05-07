
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, map, tap} from 'rxjs/operators';
import {IRootState} from '../+store';

import {authenticate, login, logout, register} from '../+store/actions';
import {IUser} from '../shared/types';

@Injectable()
export class AuthService {
  currentUser$ = this.store.select((state) => state.auth.currentUser);
  isLogged$ = this.currentUser$.pipe(
    map((currentUser) => currentUser !== null)
  );
  isReady$ = this.currentUser$.pipe(
    map((currentUser) => currentUser !== undefined)
  );

  constructor(private http: HttpClient, private store: Store<IRootState>) {}

  login(data: any): Observable<any> {
    return this.http
      .post<IUser>(`api/login`, data)
      .pipe(tap((user: IUser) => this.store.dispatch(login({ user }))));
  }

  register(data: any): Observable<any> {
    return this.http
      .post<IUser>(`api/register`, data)
      .pipe(tap((user: IUser) => this.store.dispatch(register({ user }))));
  }

  logout(): Observable<any> {
    return this.http
      .post<IUser>(`api/logout`, {})
      .pipe(tap((user: IUser) => this.store.dispatch(logout())));
  }

  authenticate(): Observable<any> {
    return this.http.get<IUser>(`api/users/profile`).pipe(
      tap((user: IUser) => {
        console.log(user, 'authenticate()')
        this.store.dispatch(authenticate({user}))
      }),
      catchError(() => {
        // this.store.dispatch(authenticate({ user: null }));
        return [null];
      })
    );
  }
}


// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
// import { IUser } from '../shared/types';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {

//   private _currentUser: BehaviorSubject<IUser | null> =
//     new BehaviorSubject<IUser | null>(null);

//   currentUser$ = this._currentUser.asObservable();

//   isLogged$ = this.currentUser$.pipe(map((user) => !!user));
//   isReady$ = this.currentUser$.pipe(map((user) => user !== undefined));

//   constructor(private http: HttpClient) {}

//   updateCurrentUser(user: IUser | null): void {
//     this._currentUser.next(user);
//   }

//   login(data: any): Observable<any> {
//     return this.http
//       .post<IUser>(`api/login`, data)
//       .pipe(tap((user: IUser) => this._currentUser.next(user)));
//   }

//   register(data: any): Observable<any> {
//     return this.http
//       .post<IUser>(`api/register`, data)
//       .pipe(tap((user: IUser) => this._currentUser.next(user)));
//   }

//   logout(): Observable<any> {
//     return this.http
//       .post<IUser>(`api/logout`, {})
//       .pipe(tap((user: IUser) => this._currentUser.next(null)));
//   }

//   authenticate(): Observable<any> {
//     return this.http.get<IUser>(`api/users/profile`).pipe(
//       tap((user: IUser) => this._currentUser.next(user)),
//       catchError(() => {
//         this._currentUser.next(null);
//         return [null];
//       })
//     );
//   }
// }

/*
login(data: any): Observable<any> {
    return this.http
      .post<IUser>(`api/login`, data)
      .pipe(tap((user: IUser) => this.store.dispatch(login({ user }))));
  }

  register(data: any): Observable<any> {
    return this.http
      .post<IUser>(`api/register`, data)
      .pipe(tap((user: IUser) => this.store.dispatch(register({ user }))));
  }

  logout(): Observable<any> {
    return this.http
      .post(`api/logout`, {})
      .pipe(tap(() => this.store.dispatch(logout())));
  }

  authenticate(): Observable<any> {
    return this.http
      .get<IUser>(`api/profile`)
      .pipe(tap((user: IUser) => this.store.dispatch(authenticate({ user }))));
  }
*/
