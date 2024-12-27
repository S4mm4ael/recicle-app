import { App } from '@capacitor/app';
import { recoverPassword, recoverPasswordSuccess } from './login.actions';
import { loginReducer } from './login.reducers';
import { AppInitialState } from '../AppInitialState';

describe('LoginStore', () => {
  it('Recover Password', () => {
    const initialState = AppInitialState.login;
    const newState = loginReducer(initialState, recoverPassword());
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true,
    });
  });
  it('Recover Password Success', () => {
    const initialState = {
      ...AppInitialState.login,
      isRecoveredPassword: true,
    };
    const newState = loginReducer(initialState, recoverPasswordSuccess());
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false,
    });
  });
  it('Recover Password Fail', () => {
    const initialState = {
      ...AppInitialState.login,
      isRecoveredPassword: true,
    };
    const error = { message: 'Error' };
    const newState = loginReducer(initialState, recoverPasswordSuccess());
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: false,
    });
  });
});
