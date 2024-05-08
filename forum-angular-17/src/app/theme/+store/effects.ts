
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ThemeService } from '../theme.service';

import {
  themeListLoadPostList,
  themeListLoadThemeList,
  themeListSetPostList,
  themeListSetThemeList,
  themeListThemeListLoadError
} from './actions';
import { ITheme } from '../../shared/types';
import { of } from 'rxjs';
import { ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import {PostService} from "../../post/post.service";
import { Actions } from '@ngrx/effects';

@Injectable()
export class ThemeListEffects {
  constructor(
    private actions$: Actions,
    private themeService: ThemeService,
    private postService: PostService
  ) { }

  loadThemeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(themeListLoadThemeList), // Use the correct action type
      switchMap(() =>
        this.themeService.loadThemeList().pipe(
          catchError((error) => of(themeListThemeListLoadError({ error: 'Failed to load themes' })))
        )
      ),
      map((result) =>
        result instanceof Error
          ? themeListThemeListLoadError({ error: result.message })
          : themeListSetThemeList({ themeList: result as ITheme<string>[] }) // Cast result to expected type
      )
    )
  );

  loadPostList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(themeListLoadThemeList), // Use the correct action type here
      switchMap(() => this.postService.loadPostList()),
      map((postList) => themeListSetPostList({ postList })) // Cast postList to expected type
    )
  );


}


function createEffect(arg0: () => any) {
    throw new Error('Function not implemented.');
}

function ofType(themeListLoadThemeList: ActionCreator<"[THEME LIST] Load Theme List", () => TypedAction<"[THEME LIST] Load Theme List">>): any {
    throw new Error('Function not implemented.');
}

