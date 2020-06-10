import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResetPassword } from '../models/reset-password.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  constructor(private http: HttpService) {
    this.usersUrl = 'http://localhost:8080/users/';
  }

  public register(user: any): Observable<any> {
    const token = '';
    return this.http.POST('register', user,token);
  }

  forgotPassword(email: string):Observable<any>{
    console.log(email);
    const params = new HttpParams().set('emailId',email);
    return this.http.PUT('forgotpassword',email,params);
  }

  resetPassword(password:ResetPassword,authorization:string):Observable<any>{
    const token = '';
    return this.http.PUT('resetpassword'+authorization,password,token)
  }

  verification(authorization:string){
    const token = '';
    return this.http.GET('verification'+authorization,token);
  }
}
