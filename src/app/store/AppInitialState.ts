import { AppState } from './AppState';

export const AppInitialState: AppState = {
  loading: { show: false },
  login: {
    error: null,
    isRecoveringPassword: false,
    isRecoveredPassword: false,
    isLoggingIn: false,
    isLoggedIn: false,
  },
  register: {
    error: null,
    isRegistering: false,
    isRegistered: false,
  },
};
