import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { first } from 'rxjs/operators';
import { BookService } from 'src/services/book.service';
import { AdminService } from 'src/services/admin.service';
import { Book } from 'src/models/book.model';
import { MatSnackBar, MatDialog } from '@angular/material';
import { CartServiceService } from 'src/services/cart.service';
import { MessageService } from 'src/services/message.service';
import { ViewWishlistComponent } from '../view-wishlist/view-wishlist.component';



export interface DialogData {
 
}


@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  countResult: any;
  books: any;
  cartBooks: any = [];
  @Output() cartCounter = new EventEmitter<number>();
  // cards = [this.books];


  constructor(private bookservice: BookService, private snackBar: MatSnackBar, private cartService: CartServiceService,
    private messageService: MessageService,
    public dialog: MatDialog) { }


  ngOnInit() {
    this.loadAllBooks();
    this.getItems();


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
onAddBookToWishList(bookId){
  console.log(bookId);
  this.bookservice.addToWishListBooks(bookId).subscribe(
    (data) => {
      if (data.status === 200) {
        this.messageService.changeMessage();
        this.snackBar.open(data.message, 'ok', {
          duration: 2000,
        });
      }
    },
    (error: any) => {
      this.snackBar.open(error.error, 'ok', { duration: 2000 });
    }
  );
}



openDialog(book) {
  const dialogRef = this.dialog.open(ViewWishlistComponent, {
    width: '350px',
    data: {
      id:book.bookId,
      bookname: book.bookName,
      bookauthor:book.authorName,
      bookprice:book.price
    }
  });
}







  addToCart(book: Book) {
    console.log(book);
    if (localStorage.getItem('token') === null) {
      if (this.cartBooks.length < 5) {
        this.cartBooks.push(book);
        localStorage.setItem('books', JSON.stringify(this.cartBooks));
        this.cartCounter.emit(this.cartBooks.length);
    } else {
      this.snackBar.open('Cart items cant be more than 5', 'ok', {duration: 2000} );
    }
    } else {
      this.cartService.addToCart(book.bookId).subscribe((data: any) => {
        console.log(data);
        if (data.status === 200) {
          this.cartCounter.emit(data.data.totalBooksInCart);
          this.snackBar.open(data.message, 'ok', {
            duration: 2000
          });
        } else if (data.status === 208) {
          this.snackBar.open(data.message, 'ok', {
            duration: 2000
          });
        }
      }, (error: any) => {
        this.snackBar.open(error.error.message, 'ok', {
          duration: 2000
        });
      });
     }
  }
}
