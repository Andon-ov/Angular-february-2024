import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './reducers';
import { authReducer } from './reducers';

export interface RootState {
  readonly auth: AuthState;
}

export const reducers: ActionReducerMap<RootState> = {
  auth: authReducer,
};
