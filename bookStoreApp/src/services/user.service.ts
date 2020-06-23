import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ResetPassword } from 'src/models/reset-password.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  public register(user: any): Observable<any> {
    console.log(user);
    return this.http.POST('user/register', user, '');
  }

  forgotPassword(email: string): Observable<any> {
    console.log(email);
    const params = new HttpParams().set('emailId', email);
    return this.http.PUT('user/forgotpassword', email, params);
  }

  resetPassword(password: ResetPassword, authorization: string): Observable<any> {
    const token = '';
    return this.http.PUT('user/resetpassword' + authorization, password, token);
  }

  verification(authorization: string) {
    const token = '';
    return this.http.GET('user/verify' + authorization, token);
  }

  public login(login: any): Observable<any> {
    return this.http.POST('user/login', login, '');
  }
}
