import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListItemComponent } from "../theme-list-item/theme-list-item.component";
import { IThemeModuleState } from '../+store';
import { Store } from '@ngrx/store';
import { themeListLoadThemeList } from '../+store/actions';
import { ITheme } from '../../shared/types';
import { ThemeService } from '../theme.service';

@Component({
    selector: 'app-themes-list',
    standalone: true, // Add CommonModule to imports
    templateUrl: './themes-list.component.html',
    styleUrl: './themes-list.component.css',
    imports: [CommonModule, ThemeListItemComponent],
    providers:[ThemeService]
})
export class ThemesListComponent {

  themeList: ITheme[] | undefined;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemeList().subscribe(themeList => {
      this.themeList = themeList;
    });
  }

  // themeList$ = this.store.select(state => state.theme.list.themeList);

  // constructor(private store: Store<IThemeModuleState>) {
  //   this.store.dispatch(themeListLoadThemeList());
  // }


}
