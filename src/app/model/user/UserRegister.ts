export type RegisterStateType = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export class RegisterState implements RegisterStateType {
  name: string;
  email: string;
  password: string;
  phone: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.phone = '';
  }
}
