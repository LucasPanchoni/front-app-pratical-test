import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private http: HttpClient) { }

  async changePlan(changePlanData: any): Promise<boolean> {
    const result = await this.http.put<any>(`${environment.api}/users/changePlan/`, changePlanData).toPromise();
    if (result){
      window.sessionStorage.setItem('planID', result.planId);
      return true;
    }
    return false;
  }

  async login(user: any): Promise<boolean> {
    const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
    const userDTO = await this.http.get<any>(`${environment.api}/users/login/${user.login}`).toPromise();
    if (result){
      window.sessionStorage.setItem('token', result.acess_token);
      window.sessionStorage.setItem('login', userDTO.login);
      window.sessionStorage.setItem('planID', userDTO.planId);
      return true;
    }
    return false;
  }

  getAuthorizationToken(): string {
    return window.sessionStorage.getItem('token');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    return false;

    /* TODO jwt_decode from getTokenExpirationDate() is not currently working,
     so we are not checking if the token is expired.

    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined){
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
    */
  }

  isUserLoggedIn(): boolean {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)){
      return false;
    }
    return true;
  }

}
