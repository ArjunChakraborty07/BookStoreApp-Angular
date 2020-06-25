import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VendorService } from './vendor.service';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSource = new BehaviorSubject(Response);
  currentMessage = this.messageSource.asObservable();
  constructor(
    private vendorService: VendorService,
    private bookService: BookService
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
}
