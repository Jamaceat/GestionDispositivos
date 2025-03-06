export interface IUserRegister {
    firstName: string;
    lastame: string;
    document: string;
    email: string;
    address?: string
    password: string;
    roles?: string[]
  }