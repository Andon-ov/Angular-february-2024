import { createAction, props } from '@ngrx/store';
import { User } from '../shared/types/user';

const authNamespace = `[AUTH]`;

export const login = createAction(
  `${authNamespace} Login`,
  props<{ user: User }>()
);

export const register = createAction(
  `${authNamespace} Register`,
  props<{ user: User }>()
);

export const logout = createAction(`${authNamespace} Logout`);

export const authenticate = createAction(
  `${authNamespace} Authenticate`,
  props<{ user: User }>()
);

export const updateUser = createAction(
  `${authNamespace} Update User`,
  props<{ user: User }>()
);