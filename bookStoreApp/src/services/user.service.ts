import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ResetPassword } from 'src/models/reset-password.model';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService
 {

  constructor(private http: HttpService) { }
  public register(user: any): Observable<any> {
    console.log(user);
   return this.http.POST('users/register', user, '');
  }

  forgotPassword(email: string): Observable<any> {
    console.log(email);
    const params = new HttpParams().set('emailId', email);
    return this.http.PUT('forgotpassword', email, params);
  }

  resetPassword(password: ResetPassword, authorization: string): Observable<any> {
    const token = '';
    return this.http.PUT('resetpassword' + authorization, password, token);
  }

  verification(authorization: string) {
    const token = '';
    return this.http.GET('verification' + authorization, token);
  }

  public login(login: any): Observable<any> {
    return this.http.POST('users/login', login, '');
  }
  uploadProfie(file:FormData)
  {
    console.log("IN USERSERVICE TO UPLOAD IMAGE:",file);
    return this.http.POST('users/uploadimage',file,{ headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
}
