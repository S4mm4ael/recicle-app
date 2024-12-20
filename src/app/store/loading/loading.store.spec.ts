import { createAction } from '@ngrx/store';
import { loadingReducer } from './loading.reducers';
import { show, hide } from './loading.actions';
import { LoadingState } from './LoadingState';

describe('LoadingStore', () => {
  it('show', () => {
    const initialState: LoadingState = { show: false };
    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({ show: true });
  });
  it('hide', () => {
    const initialState: LoadingState = { show: true };
    const newState = loadingReducer(initialState, hide());

    expect(newState).toEqual({ show: false });
  });
  it('should keep state if action is unknown', () => {
    const initialState: LoadingState = { show: true };
    const action = createAction('unknown action');
    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({ show: true });
  });
});
