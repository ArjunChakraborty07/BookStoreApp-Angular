import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpService) { }

  getAllUsers() {
    return this.http.GET('admin/allUsers', '');
  }
  getAllBuyers() {
    return this.http.GET('admin/allBuyers', '');
  }
  getAllSellers() {
    return this.http.GET('admin/allSellers', '');
  }
  getAllBooks() {
    return this.http.GET('admin/allBooks', '');
  }
  getAllBooksForVerigication() {
    return this.http.GET('admin/allBooksForVerigication', '');
  }
}
