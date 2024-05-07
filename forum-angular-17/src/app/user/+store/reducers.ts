import { createReducer, on } from '@ngrx/store';
import {
  userLoginSetErrorMessage,
  userLoginSetLoading,
  userRegisterSetLoading,
  userRegisterSetErrorMessage,
  userProfileSetEditMode,
  userProfileSetErrorMessage
} from './actions';

export interface ILoginState {
  errorMessage: string | null;
  isLoading: boolean;
}

export const initialLoginState: ILoginState = {
  errorMessage: null,
  isLoading: false
};

export const loginReducer = createReducer<ILoginState>(
  initialLoginState,
  on(userLoginSetErrorMessage, (state, action) => {
    console.log('userLoginSetErrorMessage')
    console.log('Action Payload:', action);
    console.log('Current State:', state);

    return { ...state, errorMessage: action.message };
  }),
  on(userLoginSetLoading, (state, action) => {

    console.log('userLoginSetLoading')
    console.log('Action Payload:', action);
    console.log('Current State:', state);
    return { ...state, isLoading: action.isLoading };
  })
);

export interface IRegisterState {
  errorMessage: string | null;
  isLoading: boolean;
}

export const initialRegisterState: IRegisterState = {
  errorMessage: null,
  isLoading: false
};

export const registerReducer = createReducer<IRegisterState>(
  initialRegisterState,
  on(userRegisterSetErrorMessage, (state, action) => {
    console.log('userRegisterSetErrorMessage')
    console.log('Action Payload:', action);
    console.log('Current State:', state);
    return { ...state, errorMessage: action.message };
  }),
  on(userRegisterSetLoading, (state, action) => {

    console.log('userRegisterSetLoading')
    console.log('Action Payload:', action);
    console.log('Current State:', state);
    return { ...state, isLoading: action.isLoading };
  })
);

export interface IProfileState {
  isEditMode: boolean;
  isLoading: boolean;
}

export const initialProfileState: IProfileState = {
  isEditMode: false,
  isLoading: false
};

export const profileReducer = createReducer<IProfileState>(
  initialProfileState,
  on(userProfileSetEditMode, (state, action) => {

    const isLoading = !action.isEdit ? false : state.isLoading;
    console.log('userProfileSetEditMode')
    console.log('Action Payload:', action);
    console.log('Current State:', state);
    console.log('isLoading:', isLoading)

    return { ...state, isEditMode: action.isEdit, isLoading };
  }),

 on(userLoginSetLoading, (state, action) => {
    console.log('userLoginSetLoading')
    console.log('Action Payload:', action);
    console.log('Current State:', state);

    return { ...state, isLoading: action.isLoading };
  }),

  on(userProfileSetErrorMessage, (state, action) => {
    const isLoading = false;
    console.log('userProfileSetErrorMessage')
    console.log('isLoading:', isLoading)
    console.log('Action Payload:', action);
    console.log('Current State:', state);

    return { ...state, errorMessage: action.message, isLoading };
  }),
);
