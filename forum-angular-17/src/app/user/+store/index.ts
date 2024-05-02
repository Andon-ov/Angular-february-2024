import { ActionReducerMap } from '@ngrx/store';
import { ILoginState, IRegisterState, IProfileState, loginReducer, registerReducer, profileReducer } from './reducers';
import { IRootState } from '../../+store';


export interface IUserState {
  readonly login: ILoginState;
  readonly register: IRegisterState;
  readonly profile: IProfileState;
}

export interface IUserModuleState extends IRootState {
  user: IUserState;
}

export const reducers: ActionReducerMap<IUserState> = {
  login: loginReducer,
  register: registerReducer,
  profile: profileReducer
};

export { loginReducer, registerReducer, profileReducer };
