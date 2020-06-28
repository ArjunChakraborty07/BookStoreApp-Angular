import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpService) { }

  getAllSellers() {
    return this.http.GET('admin/getSellersForVerification', {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
  getAllBooksForVerification() {
    console.log('service', localStorage.getItem('token'));
    return this.http.GET('admin/getBooksForVerification/' + localStorage.getItem('sellerId'), {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
  logout() {
    return this.http.PUT('users/logout', null, {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
  verfy(bookId: any, sellerId: any, verification: any) {
    console.log(verification);
    return this.http.PUT('admin/bookVerification/' + bookId + '/' + sellerId + '/' + verification, null, {
        headers: new HttpHeaders().set('token', localStorage.getItem('token'))
      });
  }
}
