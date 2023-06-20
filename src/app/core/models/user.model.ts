export interface User {
  username: string;
  name: string;
  lastname: string;
  mail: string;
  dni: string;
  phone: string;
  state: string;
  admin: boolean | number | string;
}

export interface Login {
  username: string;
  mail: string;
}
