import { LoginState } from './LoginState';
import {
  recoverPasswordSuccess,
  recoverPassword,
  recoverPasswordFail,
} from './login.actions';
import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';

const initialState: LoginState = {
  error: null,
  isRecoveringPassword: false,
  isRecoveredPassword: false,
  isLoggingIn: false,
  isLoggedIn: false,
};

const reducer = createReducer(
  initialState,
  on(recoverPassword, (state) => ({
    ...state,
    error: null,
    isRecoveredPassword: false,
    isRecoveringPassword: true,
  })),
  on(recoverPasswordSuccess, (state) => ({
    ...state,
    error: null,
    isRecoveringPassword: false,
    isRecoveredPassword: true,
  })),
  on(recoverPasswordFail, (state, { error }) => ({
    ...state,
    error,
    isRecoveredPassword: false,
    isRecoveringPassword: false,
  }))
);

export function loginReducer(state: LoginState, action: Action): LoginState {
  return reducer(state, action);
}
