import { Component, OnInit } from '@angular/core';
import { ITheme } from '../shared/types/theme';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css',
})
export class ThemesListComponent implements OnInit {
  themes: ITheme[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes;
      console.log(themes);
    });
  }
}
