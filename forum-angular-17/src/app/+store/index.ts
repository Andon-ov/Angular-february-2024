import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './reducers';
import { authReducer } from './reducers';

export interface IRootState {
  readonly auth: AuthState;
}

export const reducers: ActionReducerMap<IRootState> = {
  auth: authReducer,
};
