import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  private addBookApi = 'sellers/addBook/';
  private updateBookApi = 'sellers/updateBook';
  private deleteBookApi = 'sellers/removeBook/';
  private displayBookApi = 'sellers/displayBooks/';

  constructor(private http: HttpClient) {}

  addBook(formGroup: FormGroup): Observable<any> {
    return this.http.post(
      environment.baseUrl + this.addBookApi + localStorage.getItem('token'),
      formGroup
    );
  }

  displayBooks(): Observable<any> {
    return this.http.get(
      environment.baseUrl + this.displayBookApi + localStorage.getItem('token')
    );
  }

  deleteBooks(bookId: any): Observable<any> {
    return this.http.delete(
      environment.baseUrl +
        this.deleteBookApi +
        bookId +
        '/' +
        localStorage.getItem('token')
    );
  }
}
