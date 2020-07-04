import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VendorService } from './vendor.service';
import { BookService } from './book.service';
import { CartServiceService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSource = new BehaviorSubject(Response);
  currentMessage = this.messageSource.asObservable();
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
        this.messageSource.next(JSON.parse(localStorage.getItem('cart')));
    } else {
      this.cartService.displayBooksInCart().subscribe((data: any) => {
        this.messageSource.next(data);
      });
    }
  }
}
