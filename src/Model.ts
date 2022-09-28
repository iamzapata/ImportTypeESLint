export type Address = {
  street: string;
  zip: number;
};

export interface Person {
  name: string;
  surname: string;
  age: number;
  sex: string;
  address: Address;
}
