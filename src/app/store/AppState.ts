import { LoadingState } from 'src/app/store/loading/LoadingState';
import { LoginState } from 'src/app/store/login/LoginState';
import { RegisterState } from './register/RegisterState';

export interface AppState {
  loading: LoadingState;
  login: LoginState;
  register: RegisterState;
}
