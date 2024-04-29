import { createReducer, on } from '@ngrx/store';
import { login, register, logout, authenticate } from './actions';
import { User } from '../shared/types/user';

export interface AuthState {
  currentUser: User | null | undefined;
}

export const initialState: AuthState = {
  currentUser: undefined,
};

const setCurrentUser = (
  state: AuthState,
  action:
    | ReturnType<typeof login>
    | ReturnType<typeof register>
    | ReturnType<typeof authenticate>
) => {
  return { ...state, currentUser: action.user };
};

export const authReducer = createReducer<AuthState>(
  initialState,
  on(login, setCurrentUser),
  on(register, setCurrentUser),
  on(authenticate, setCurrentUser),
  on(logout, (state) => {
    return { ...state, currentUser: null };
  })
);
