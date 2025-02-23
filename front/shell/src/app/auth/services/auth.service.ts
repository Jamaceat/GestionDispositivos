import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IUserLogin, IUserLoginResponse, IUserRegister } from '../../utils/user-login.interface';
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

  /**
   * @author J. Jose Blanco
   * @description Metodo utilizado para registrar usuario en el sistema, por defecto se registra como user.
   * @param user 
   * @version 1.0
  */
  public register(user: IUserRegister): Observable<IUserRegister> {
    return this.httpClient.post<IUserRegister>('http://localhost:8082/user/register',user);
  }

  /**
   * @author J. Jose Blanco
   * @description Cerrar la sesion del usuario
   * @version 1.0
  */
  public logOut() {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }
}
