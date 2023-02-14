import { RequestLogin } from './../../pages/auth-login/interfaces/requestLogin';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { logout } from '../../pages/auth-login/state/auth.actions';
import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';
import { AuthState } from '../../pages/auth-login/state/auth.state';
import { RegisterRequest } from '../../pages/auth-registro/interfaces/registerRequest';
import { LoginSuccess } from 'src/app/pages/auth-login/interfaces/loginSuccess';
import { ErrorResponse } from '../interfaces/errorResponse';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _apiURL = environment.api_url;

  constructor(
    private http:HttpService,
    private store:Store<AuthState>
  ) { }

  login(email: string, password: string):Observable<LoginSuccess | ErrorResponse> {
    const requestBody:RequestLogin = { email, password };
    return this.http.postGeneric<LoginSuccess | ErrorResponse>(`${this._apiURL}/auth/login`, requestBody);
  }

  logout() {
    this.store.dispatch(logout());
  }

  register(requestBody:RegisterRequest) {
    return this.http.postGeneric(`${this._apiURL}/users`, requestBody);
  }

  authMe():Observable<User> {
    return this.http.get<User>(`${this._apiURL}/auth/me`);
  }

}
