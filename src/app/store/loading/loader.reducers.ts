import { createReducer, on } from '@ngrx/store';
import { hide, show } from './loading.actions';

const reducer = createReducer(
  {},
  on(show, () => {
    return { show: true };
  }),
  on(hide, () => {
    return { show: false };
  })
);

export function loadingReducer(state, action) {
  return reducer(state, action);
}
