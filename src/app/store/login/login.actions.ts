import { createAction, props } from '@ngrx/store';

const recoverPassword = createAction('[Recover Password] Recover Password');

const recoverPasswordSuccess = createAction(
  '[Recover Password] Recover Password Success'
);

const recoverPasswordFail = createAction(
  '[Recover Password] Recover Password Fail',
  props<{ error: any }>()
);

export { recoverPassword, recoverPasswordSuccess, recoverPasswordFail };
