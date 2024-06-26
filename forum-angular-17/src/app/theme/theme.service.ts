import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITheme } from '../shared/types';
import { IPost } from '../shared/types';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`api/themes`);
  }

  loadTheme(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`api/themes/${id}`);
  }

  saveTheme(data: any): Observable<ITheme<any>> {
    return this.http.post<ITheme<any>>(`api/themes`, data);
  }

}
