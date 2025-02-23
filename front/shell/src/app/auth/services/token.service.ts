import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenName = 'tokenUser';

  constructor() { }

  /**
   * @author J. Jose Blanco
   * @description Almacenar el token en la sessionStorage del usuario
   * @param token 
   * @version 1.0
  */
  setToken(token: string): void {
    sessionStorage.setItem(this.tokenName, token);
  }

  /**
   * @author J. Jose Blanco
   * @description Obtener el token en la sessionStorage del usuario
   * @version 1.0
  */
  public getToken() {
    return sessionStorage.getItem(this.tokenName);
  }

  /**
   * @author J. Jose Blanco
   * @description Validar si el usuario esta autenticado.
   * @version 1.0
  */
  public isAutenticated() {
    return !!sessionStorage.getItem(this.tokenName);
  }

  /**
   * @author J. Jose Blanco
   * @description Limpiar la sessionStorage
   * @version 1.0
  */
  clearToken(): void {
    sessionStorage.removeItem(this.tokenName);
  }
}
