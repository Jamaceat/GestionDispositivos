export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  firstName: string;
  lastame: string;
  document: string;
  email: string;
  address?: string
  password: string;
  roles?: string[]
}

export interface IUserLoginResponse {
  message: string;
  result: string;
}
