import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpService) { }

  getAllUsers() {
    return this.http.GET('admin/getAllUsers', '');
  }
  getAllBuyers() {
    return this.http.GET('admin/getAllBuyers', '');
  }
  getAllSellers() {
    return this.http.GET('admin/getAllSellers', '');
  }
  getAllBooks() {
    return this.http.GET('admin/getAllBooks', '');
  }
  getAllBooksForVerigication() {
    return this.http.GET('admin/getAllBooksForVerigication', '');
  }
}
