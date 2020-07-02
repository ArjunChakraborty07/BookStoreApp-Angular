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
    this.cartService.displayBooksInCart().subscribe((data: any) => {
      console.log(data.data);
      this.messageSource.next(data);
    });
  }
}
