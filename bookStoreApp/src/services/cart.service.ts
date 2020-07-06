import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private addToCartApi = 'carts/addToCart/';
  private removeFromCartApi = 'carts/removeFromCart/';
  private displayItemsApi = 'carts/displayItems';
  private addQuantityApi = 'carts/addQuantity/';
  private removeQuantityApi = 'carts/removeQuantity/';
  private subject = new Subject<any>();
  constructor(private http: HttpService) { }

  addToCart(bookId: any): Observable <any> {
    return this.http.POST(this.addToCartApi + bookId, '', {
      headers : new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

  displayBooksInCart(): Observable<any> {
    return this.http.GET(this.displayItemsApi, {
      headers : new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

  removeFromCart(cartBookId: any): Observable<any> {
    return this.http.DELETE(this.removeFromCartApi + cartBookId, '', {
      headers : new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

  addQuantity(cartBookId: any): Observable<any> {
    return this.http.PUT(this.addQuantityApi + cartBookId, '', {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

  removeQuantity(cartBookId: any): Observable<any> {
    return this.http.PUT(this.removeQuantityApi + cartBookId, '', {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

  getCartCounter(): Observable<any> {
    return this.subject.asObservable();
  }
  sendCartCounter(cartSize: number) {
    this.subject.next(cartSize);
  }

  addToOrder(): Observable<any> {
    return this.http.POST('orders/addMyOrder', '', {
      headers : new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
}
