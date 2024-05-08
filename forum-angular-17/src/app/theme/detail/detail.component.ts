import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {ThemeService} from '../theme.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";
import {IThemeModuleState} from "../+store";
import {themeDetailClear, themeDetailSetTheme} from "../+store/actions";

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  imports: [LoaderComponent,CommonModule],
  providers:[ThemeService]
})
export class DetailComponent implements OnInit, OnDestroy {

  theme$ = this.store.select(state => state.theme.detail.theme);
  isLoading$ = this.store.select(state => state.theme.detail.isLoading);

  constructor(
    private store: Store<IThemeModuleState>,
    themeService: ThemeService,
    activatedRoute: ActivatedRoute
  ) {
    const id = activatedRoute.snapshot.params['id'];
    themeService.loadTheme(id).subscribe(theme => {
      this.store.dispatch(themeDetailSetTheme({ theme }));
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(themeDetailClear());
  }
}
