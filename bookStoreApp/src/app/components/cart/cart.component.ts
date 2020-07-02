import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/models/book.model';
import { CartServiceService } from 'src/services/cart.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Output() cartCounter = new EventEmitter<number>();
  @Output() isCart = new EventEmitter<boolean>();
  books: any = [];
  cartBooks: any = [];
  quantity = 1;

  constructor(private cartService: CartServiceService, private snackBar: MatSnackBar) {}


  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      console.log('no token');
      this.books = JSON.parse(localStorage.getItem('books'));
      if (this.books === null) {
        this.books = [];
      }
    } else {
      this.cartService.displayBooksInCart().subscribe((data: any) => {
        this.displayBooksInCart(data);
      });
    }
  }

  cartCount($event) {
    this.cartCounter.emit(this.books.length);
  }
  removeFromCart(cartBook: any) {
    console.log(cartBook);
    if (localStorage.getItem('token') == null) {
      this.books = JSON.parse(localStorage.getItem('books'));
      // this.books = this.books.filter(item => item.Id === bookId);
      this.books = this.books.filter(({ bookId }) => bookId !== cartBook.book.bookId);
      // this.books.splice(book, 1);
      console.log(this.books);
      localStorage.removeItem('books');
      localStorage.setItem('books', JSON.stringify(this.books));
      this.cartCounter.emit(this.books.length);
    } else {
      this.cartService.removeFromCart(cartBook.cartBookId).subscribe((data: any) => {
        console.log(data);
        if (data.status === 200) {
          this.snackBar.open(data.message, 'ok', {
            duration: 2000
          });
        }
      }, (error: any) => {
        this.snackBar.open(error.error.message, 'ok', {
          duration : 2000
        });
      });
    }
  }

  displayBooksInCart(data) {
    data.data.cartBooks.forEach((cartBookData) => {
      this.cartBooks.push(cartBookData);
      this.books.push(cartBookData.book);
    });
    console.log(this.books);
  }

  addQuantity(cartBook: any) {
    this.cartService.addQuantity(cartBook.cartBookId).subscribe((data: any) => {
      if (data.status === 200) {
        this.snackBar.open(data.message, 'ok', {
          duration: 2000
        });
      }
    }, (error: any) => {
      this.snackBar.open(error.error.message, 'ok', {
        duration: 20000
      });
    });
  }

  removeQuantity(cartBook: any) {
    this.cartService.removeQuantity(cartBook.cartBookId).subscribe((data: any) => {
      if (data.status === 200) {
        this.snackBar.open(data.message, 'ok', {
          duration: 2000
        });
      }
    }, (error: any) => {
      this.snackBar.open(error.error.message, 'ok', {
        duration: 20000
      });
    });
  }
}
