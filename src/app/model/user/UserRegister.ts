import { AddressType } from '../address/Address';

export type RegisterStateType = {
  name: string;
  email: string;
  password: string;
  phone: string;

  adress: AddressType;
};

export class RegisterState implements RegisterStateType {
  name: string;
  email: string;
  password: string;
  phone: string;
  adress: AddressType;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.phone = '';
    this.adress = {
      addrress: '',
      number: '',
      neighborhood: '',
      city: '',
      complement: '',
      zipCode: '',
    };
  }
}
