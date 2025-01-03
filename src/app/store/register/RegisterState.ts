export type RegisterStateType = {
  error: any;
  isRegistering: boolean;
  isRegistered: boolean;
};

export class RegisterState implements RegisterStateType {
  error: any;
  isRegistering: boolean;
  isRegistered: boolean;

  constructor() {
    this.error = null;
    this.isRegistering = false;
    this.isRegistered = false;
  }
}
