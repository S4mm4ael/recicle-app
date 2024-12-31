import { App } from '@capacitor/app';
import { LoginState } from './LoginState';
import {
  recoverPasswordSuccess,
  recoverPassword,
  recoverPasswordFail,
  login,
  loginSuccess,
  loginFail,
} from './login.actions';
import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { AppInitialState } from '../AppInitialState';

const initialState: LoginState = AppInitialState.login;

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
  })),
  on(login, (currentState) => {
    App.removeAllListeners();
    return {
      ...currentState,
      isLoggingIn: true,
      isLoggedIn: false,
      error: null,
    };
  }),
  on(loginSuccess, (currentState, { user }) => {
    App.removeAllListeners();
    return {
      ...currentState,
      isLoggingIn: false,
      isLoggedIn: true,
      user,
    };
  }),
  on(loginFail, (currentState, { error }) => {
    App.removeAllListeners();
    return {
      ...currentState,
      isLoggingIn: false,
      isLoggedIn: false,
      error,
    };
  })
);

export function loginReducer(state: LoginState, action: Action): LoginState {
  return reducer(state, action);
}
