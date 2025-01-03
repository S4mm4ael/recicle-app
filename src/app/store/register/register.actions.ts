import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Register] Register',
  props<{ email: string; password: string }>()
);
