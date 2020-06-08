import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users/';
  }

  public register(user: any): Observable<any> {
    return this.http.post(this.usersUrl + 'register', user);
  }

}
