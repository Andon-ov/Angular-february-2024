import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IPost } from '../../shared/types';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {

  @Input() themeId: string | undefined;

  @Input() postList: IPost[] | undefined;
}
