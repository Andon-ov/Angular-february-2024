import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
