import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IPost } from '../../shared/types';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent implements OnInit {
  
  // @Input() themeId: string | undefined;

  postList: IPost[] | undefined;

  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postService.loadPostList(5).subscribe((postList) => {
      this.postList = postList;
      console.log(postList);
      
    });
  }
}
