export type AddressType = {
  addrress: string;
  number: string;
  neighborhood: string;
  city: string;
  complement: string;
};

export class Address implements AddressType {
  addrress: string;
  number: string;
  neighborhood: string;
  city: string;
  complement: string;

  constructor() {
    this.addrress = '';
    this.number = '';
    this.neighborhood = '';
    this.city = '';
    this.complement = '';
  }
}
