import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    return this.http.get<ITheme[]>('api/themes');
  }

  getPosts(limit?: number) {
    let url = 'api/posts';

    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<IPost[]>(url);
  }
}
