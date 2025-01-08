import { AppInitialState } from '../AppInitialState';
import { RegisterState } from './RegisterState';
import { Action, createReducer, on } from '@ngrx/store';
import { register, registerFailure, registerSuccess } from './register.actions';

const initialState = AppInitialState.register;
const reducer = createReducer(
  initialState,
  on(register, (state) => {
    return {
      ...state,
      isRegistering: true,
      isRegistered: false,
      error: null,
    };
  }),
  on(registerSuccess, (state) => {
    return {
      ...state,
      isRegistering: false,
      isRegistered: true,
    };
  }),
  on(registerFailure, (state) => {
    return {
      ...state,
      isRegistering: false,
      isRegistered: false,
    };
  })
);

export function registerReducer(
  state: RegisterState | undefined,
  action: Action
): RegisterState {
  return reducer(state, action);
}
