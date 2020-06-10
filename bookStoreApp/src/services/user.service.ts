import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResetPassword } from '../models/reset-password.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpService) {}

public register(user: any): Observable<any> {
  return this.http.POST('user/register', user, '');
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
