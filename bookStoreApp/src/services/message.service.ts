import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VendorService } from './vendor.service';
import { BookService } from './book.service';
import { CartServiceService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  count:number;
  private dataSource=new BehaviorSubject(this.count);
  currentData=this.dataSource.asObservable();
  private messageSource = new BehaviorSubject(Response);
  currentMessage = this.messageSource.asObservable();
  private cartSource = new BehaviorSubject(Response);
  cartMessage = this.cartSource.asObservable();
  
  constructor(
    private vendorService: VendorService,
    private bookService: BookService,
    private cartService: CartServiceService
  ) {}

  changeMessage() {
    this.vendorService.displayBooks().subscribe((data) => {
      this.messageSource.next(data);
    });
  }
  searchBook(event) {
    this.bookService.searchBooks(event.target.value).subscribe((data) => {
      this.messageSource.next(data);
    });
  }
  cartBooks() {
    if (localStorage.getItem('token') === null && localStorage.getItem('cart') != null) {
        this.cartSource.next(JSON.parse(localStorage.getItem('cart')));
        
    } else {
      this.cartService.displayBooksInCart().subscribe((data: any) => {
        this.cartSource.next(data);
        this.count = data.data.totalItemsInCart;
      });
    }
  }
  onCartCount(){
    this.dataSource.next(this.count);
  }

  // getCartCounter(){
  //    this.messageSource.next();
  // }
  sendCartCounter(cartSize: number) {
    this.dataSource.next(cartSize);
  }

  onGetAllBooks(){
    this.bookService.getAllbooks().subscribe((data: any) => {
      console.log(data);
      this.messageSource.next(data);
    });
  }
}
