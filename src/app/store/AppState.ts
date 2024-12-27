import { LoadingState } from 'src/app/store/loading/LoadingState';
import { LoginState } from 'src/app/store/login/LoginState';

export interface AppState {
  loading: LoadingState;
  login: LoginState;
}
