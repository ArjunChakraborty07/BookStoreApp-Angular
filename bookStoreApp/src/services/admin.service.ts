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
}
