import { Component, Input } from '@angular/core';
import { ITheme } from '../../shared/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theme-list-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './theme-list-item.component.html',
  styleUrl: './theme-list-item.component.css',
})
export class ThemeListItemComponent {
  @Input() theme: ITheme | undefined;
}
