import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenName = 'tokenUser';

  constructor() { }

  setToken(token: string): void {
    sessionStorage.setItem(this.tokenName, token);
  }

  public getToken() {
    return sessionStorage.getItem(this.tokenName);
  }

  public isAutenticated() {
    return !!sessionStorage.getItem(this.tokenName);
  }

  clearToken(): void {
    sessionStorage.removeItem(this.tokenName);
  }
}
