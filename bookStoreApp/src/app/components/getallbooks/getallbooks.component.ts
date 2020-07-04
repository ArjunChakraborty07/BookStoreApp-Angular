import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { first } from 'rxjs/operators';
import { BookService } from 'src/services/book.service';
import { AdminService } from 'src/services/admin.service';
import { Book } from 'src/models/book.model';
import { MatSnackBar } from '@angular/material';
import { CartServiceService } from 'src/services/cart.service';
import { CartBookModule } from 'src/models/cart-book/cart-book.module';
import { CartModule } from 'src/models/cart/cart.module';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  countResult: any;
  books: any;
  cart: CartModule ;
  cartBook: CartBookModule ;


  constructor(private bookservice: BookService, private snackBar: MatSnackBar, private cartService: CartServiceService) { }


  ngOnInit() {
    this.loadAllBooks();
    this.getItems();
    this.cartService.getCartCounter();
  }

  private loadAllBooks() {
    this.bookservice.getAllbooks().subscribe((data: any) => {
      this.books = data.data;
    },
    );
  }

private getItems() {
  this.bookservice.getNumberOfItems().subscribe((data: any) => {
  this.countResult = data.data;
  },
  );
}
  addToCart(book: Book) {
    console.log(book);
    if (localStorage.getItem('token') === null) {
    this.cartBook = new CartBookModule();
    this.cartBook.bookQuantity = 1;
    if (localStorage.getItem('cart') === null) {
      this.cart = new CartModule();
      this.cart.totalBooksInCart = 0;
     } else {
       this.cart = JSON.parse(localStorage.getItem('cart'));
       console.log(this.cart);
     }
    if (this.cart.totalBooksInCart < 5) {
        this.cartBook.book = book;
        this.cart.cartBooks.forEach(element => {
          if (element.book.bookId === book.bookId) {
            this.cart.cartBooks.splice(this.cart.cartBooks.indexOf(element), 1);
            this.cart.totalBooksInCart--;
            this.snackBar.open('Item Already Added to Cart', 'ok', {duration: 2000});
          }
        });
        this.cart.cartBooks.push(this.cartBook);
        this.cart.totalBooksInCart ++;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.cartService.sendCartCounter(this.cart.totalBooksInCart);
    } else {
      this.snackBar.open('Your Cart is full', 'ok', {duration: 2000} );
    }
    } else {
      this.cartService.addToCart(book.bookId).subscribe((data: any) => {
        console.log(data);
        if (data.status === 200) {
          this.cartService.sendCartCounter(data.data.totalBooksInCart);
          this.snackBar.open(data.message, 'ok', {
            duration: 2000
          });
        } else if (data.status === 208) {
          this.snackBar.open(data.message, 'ok', {
            duration: 2000
          });
        }
      }, (error: any) => {
        if (error.status === 500) {
          this.snackBar.open('Internal Server Error', 'ok', {
            duration: 2000
          });
        } else {
          this.snackBar.open(error.error.message, 'ok', {
            duration: 2000
          });
        }
      });
     }
  }
}
