import { createAction, props } from '@ngrx/store';
import { RegisterStateType } from 'src/app/model/user/UserRegister';

const register = createAction(
  '[Register]',
  props<{ userRegister: RegisterStateType }>()
);

const registerSuccess = createAction('[Register] Success');
const registerFailure = createAction(
  '[Register] Failure',
  props<{ error: any }>()
);

export { register, registerSuccess, registerFailure };
