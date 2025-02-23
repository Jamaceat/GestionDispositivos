import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IUserLogin, IUserLoginResponse } from '../../utils/user-login.interface';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly httpClient = inject(HttpClient);
  private readonly router = inject(Router)
  private readonly tokenService = inject(TokenService);

  constructor() { }

  /**
   * @author J. Jose Blanco
   * @description Metodo utilizado para loguear usuario en la plataforma, 
   *              { observe: 'response' } utilizado para acceder a las cabeceras enviadas por el servicio.
   * @param user 
   * @version 1.0
  */
  public login(user: IUserLogin): Observable<HttpResponse<any>> {
    return this.httpClient.post('http://localhost:8082/user/login', user, { observe: 'response' });
  }

  public register(user: any): Observable<any>{
    return this.httpClient.post('',user);
  }

  public logOut() {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }
}
