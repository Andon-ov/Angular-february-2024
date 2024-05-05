import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { IUser } from '../shared/types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _currentUser: BehaviorSubject<IUser | null> =
    new BehaviorSubject<IUser | null>(null);

  currentUser$ = this._currentUser.asObservable();
  
  isLogged$ = this.currentUser$.pipe(map((user) => !!user));
  isReady$ = this.currentUser$.pipe(map((user) => user !== undefined));

  constructor(private http: HttpClient) {}

  updateCurrentUser(user: IUser | null): void {
    this._currentUser.next(user);
  }

  login(data: any): Observable<any> {
    return this.http
      .post<IUser>(`api/login`, data)
      .pipe(tap((user: IUser) => this._currentUser.next(user)));
  }

  register(data: any): Observable<any> {
    return this.http
      .post<IUser>(`api/register`, data)
      .pipe(tap((user: IUser) => this._currentUser.next(user)));
  }

  logout(): Observable<any> {
    return this.http
      .post<IUser>(`api/logout`, {})
      .pipe(tap((user: IUser) => this._currentUser.next(null)));
  }

  authenticate(): Observable<any> {
    return this.http.get<IUser>(`api/users/profile`).pipe(
      tap((user: IUser) => this._currentUser.next(user)),
      catchError(() => {
        this._currentUser.next(null);
        return [null];
      })
    );
  }
}
