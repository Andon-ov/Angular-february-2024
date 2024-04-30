import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IPost } from '../shared/types';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
