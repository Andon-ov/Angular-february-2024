import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ITheme } from '../../shared/types/theme';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ThemeListItemComponent } from "../theme-list-item/theme-list-item.component";
import { Observable, Subscribable } from 'rxjs';
import { IThemeModuleState } from '../+store';
import { Store } from '@ngrx/store';
import { themeListLoadThemeList } from '../+store/actions';

@Component({
    selector: 'app-themes-list',
    standalone: true, // Add CommonModule to imports
    templateUrl: './themes-list.component.html',
    styleUrl: './themes-list.component.css',
    imports: [CommonModule, ThemeListItemComponent]
})
export class ThemesListComponent implements AfterViewInit {

  themeList$ = this.store.select(state => state.theme.list.themeList);

  constructor(private store: Store<IThemeModuleState>) {
    this.store.dispatch(themeListLoadThemeList());
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }

}
