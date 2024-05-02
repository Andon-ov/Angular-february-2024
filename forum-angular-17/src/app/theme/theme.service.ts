import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITheme } from '../shared/types/theme';
import { IPost } from '../shared/types/post';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`/themes`);
  }

  loadTheme(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`/themes/${id}`);
  }

  saveTheme(data: any): Observable<ITheme<any>> {
    return this.http.post<ITheme<any>>(`/themes`, data);
  }

}