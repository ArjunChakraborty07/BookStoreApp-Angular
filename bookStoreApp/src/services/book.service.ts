import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private http: HttpService) { }




  public getAllbooks(): Observable<any> {
   return this.http.GET('books/getBooks', '');
  }


}