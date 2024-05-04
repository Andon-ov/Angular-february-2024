import { Component } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { IPost } from '../../shared/types/post';
import { ITheme } from '../../shared/types/theme';
import { ThemeService } from '../theme.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  imports: [LoaderComponent,CommonModule],
  providers:[ThemeService]
})
export class DetailComponent {
  theme: ITheme<IPost> | null = null;


  constructor(themeService: ThemeService, activatedRoute: ActivatedRoute) {
    const id = activatedRoute.snapshot.params['id'];
    themeService.loadTheme(id).subscribe((theme) => {
      this.theme = theme;
    });
  }
}
