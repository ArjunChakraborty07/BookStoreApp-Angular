import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpService) { }

  getAllUsers() {
    return this.http.GET('admin/getAllUsers', {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
  getAllBuyers() {
    return this.http.GET('admin/getAllBuyers', {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
  getAllSellers() {
    return this.http.GET('admin/getAllSellers', {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
  getAllBooks() {
    return this.http.GET('admin/getAllBooks', {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
  getAllBooksForVerigication() {
    return this.http.GET('admin/getBooksForVerification', {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  } 
  logout() {
    return this.http.PUT('users/logout', null, {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
  verfy(bookId: any, sellerId: any, verification: any) {
    return this.http.PUT('admin/bookVerification/' + bookId + '/' + sellerId, {
      param: new HttpParams().set('verify', verification)
    },
      {
        headers: new HttpHeaders().set('token', localStorage.getItem('token'))
      });
  }
}
