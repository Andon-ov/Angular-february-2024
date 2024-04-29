import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from '../shared/types/post';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
