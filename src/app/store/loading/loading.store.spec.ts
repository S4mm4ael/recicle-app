import { loadingReducer } from './loader.reducers';
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
});
