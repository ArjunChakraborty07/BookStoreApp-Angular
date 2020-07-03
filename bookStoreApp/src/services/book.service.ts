import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private searchBookApi = '/sellers/search/';
  constructor(private http: HttpService) {}

  public getAllbooks(): Observable<any> {
    return this.http.GET('books/getBooks', '');
  }
  public searchBooks(input: string): Observable<any> {
    return this.http.GET(this.searchBookApi + input, {
      headers: new HttpHeaders().set('token', localStorage.getItem('token')),
    });
  }

  public getNumberOfItems(): Observable<any> {
    return this.http.GET('books/getBookCount',"");
  }
  
  public addToWishListBooks(bookId: any): Observable<any> {
    return this.http.POST('wishlists/addToWishlist/' + bookId,"",{
      headers: new HttpHeaders().set('token', localStorage.getItem('token')),
    });
  }   

public viewWishlist(): Observable<any>{
  return this.http.GET('wishlists/displayItems',{
    headers: new HttpHeaders().set('token', localStorage.getItem('token')),
  });
}

}
