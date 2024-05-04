import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  loadPostList(limit?: number): Observable<IPost[]> {
    {
      let url = 'api/posts';

      if (limit) {
        url += `?limit=${limit}`;
      }

      return this.http.get<IPost[]>(url);
    }
  }
}
