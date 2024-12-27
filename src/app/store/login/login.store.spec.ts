import { recoverPassword, recoverPasswordSuccess } from './login.actions';
import { loginReducer } from './login.reducers';

describe('LoginStore', () => {
  it('Recover Password', () => {
    const initialState = {
      error: null,
      isRecoveringPassword: false,
      isRecoveredPassword: false,
      isLoggingIn: false,
      isLoggedIn: false,
    };
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
      error: null,
      isRecoveringPassword: false,
      isRecoveredPassword: true,
      isLoggingIn: false,
      isLoggedIn: false,
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
      error: null,
      isRecoveringPassword: false,
      isRecoveredPassword: true,
      isLoggingIn: false,
      isLoggedIn: false,
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
