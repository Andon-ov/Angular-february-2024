import {Component, OnDestroy} from '@angular/core';
import { ThemesListComponent } from '../themes-list/themes-list.component';
import { PostsListComponent } from '../../post/posts-list/posts-list.component';
import { AsideComponent } from "../../shared/aside/aside.component";
import {Store} from "@ngrx/store";
import {IThemeModuleState} from "../+store";
import {themeListClear, themeListLoadPostList} from "../+store/actions";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-theme',
    standalone: true,
    templateUrl: './theme.component.html',
    styleUrl: './theme.component.css',
  imports: [ThemesListComponent, PostsListComponent, AsideComponent, AsyncPipe]
})
export class ThemeComponent implements OnDestroy {

  postList$ = this.store.select(state => state.theme.list.postList);
  isLoading$ = this.store.select(state => state.theme.list.isLoading);

  constructor(
    private store: Store<IThemeModuleState>
  ) {
    this.store.dispatch(themeListLoadPostList());
  }

  ngOnDestroy(): void {
    this.store.dispatch(themeListClear());
  }
}
