export type AddressType = {
  addrress: string;
  number: string;
  neighborhood: string;
  city: string;
  complement: string;
  zipCode: string;
};

export class Address implements AddressType {
  addrress: string;
  number: string;
  neighborhood: string;
  city: string;
  complement: string;
  zipCode: string;

  constructor() {
    this.addrress = '';
    this.number = '';
    this.neighborhood = '';
    this.city = '';
    this.complement = '';
    this.zipCode = '';
  }
}
