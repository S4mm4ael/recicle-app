export type UserType = {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
};

export class User implements UserType {
  constructor(
    id: number,
    email: string,
    password: string,
    name: string,
    surname: string
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
  }
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
}
