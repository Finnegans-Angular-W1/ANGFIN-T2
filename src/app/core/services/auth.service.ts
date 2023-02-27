import { TransactionRequest } from 'src/app/core/interfaces/transaction-request';
import { Transaction } from './../../pages/home/interfaces/transaction';
import { Account } from './../interfaces/account';
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
import { BodyRequest } from 'src/app/pages/auth-login/interfaces/body-request';

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
    console.log('requestBody: ', requestBody);
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

  //TODO: Mover a service independiente (Transaction)
  getAllTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this._apiURL}/transactions`);
  }
  createTransaction(requestBody:TransactionRequest):Observable<Transaction>{
    return this.http.postGeneric<Transaction>(`${this._apiURL}/transactions`, requestBody);
  }
//--------------
//!ACCOUNT ME <> AuthMe
  accountMe():Observable<Account>{
    return this.http.get<Account>(`${this._apiURL}/accounts/me`);
  }


  checkTokenExpiration():boolean{
    const data = localStorage.getItem('userExpiration');
    if(data){
      const userExpiration = JSON.parse(data);
      const dateExpiration = new Date(userExpiration.dateExpiration);
      const currentDate = new Date();
      if(currentDate > dateExpiration){
        return true;
      }
    }
    return false; //not expired or not found(token)
  }

  //Modal profile

  editUser(requestBody :any, id: number):Observable<User>{
    return this.http.put<User>(
      `${this._apiURL}/user/`, requestBody, (id + '')
    );
  }


}
