import { createAction, props } from '@ngrx/store';
import type { UserType } from '../../model/user/User';

const recoverPassword = createAction(
  '[Recover Password] Recover Password',
  props<{ email: string }>()
);

const recoverPasswordSuccess = createAction(
  '[Recover Password] Recover Password Success'
);

const recoverPasswordFail = createAction(
  '[Recover Password] Recover Password Fail',
  props<{ error: any }>()
);

const login = createAction('[Login]');
const loginSuccess = createAction(
  '[Login] Success',
  props<{ user: UserType }>()
);
const loginFail = createAction('[Login] Fail', props<{ error: any }>());

export {
  recoverPassword,
  recoverPasswordSuccess,
  recoverPasswordFail,
  login,
  loginSuccess,
  loginFail,
};
