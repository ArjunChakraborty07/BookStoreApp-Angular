import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/models/book.model';
import { CartServiceService } from 'src/services/cart.service';
import { MatSnackBar } from '@angular/material';
import { MessageService } from 'src/services/message.service';
import {FormBuilder} from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { CartModule } from 'src/models/cart/cart.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';
  cartSize: any;
  cartBooks: any = [];
  quantity = 1;
  bookSum:any=[];
  image='./assets/images/bookstore-wallpaper.jpg';
  disp=false;
  cart: CartModule;
  constructor(
    private cartService: CartServiceService,
    private snackBar: MatSnackBar,
    private messageService: MessageService,
    private fb:FormBuilder,
    private userService: UserService
  ) {}

  addressGroup=this.fb.group({
    name:['karthik'],
    phone:['8309809155'],
    pincode:['517391'],
    locality:['ap'],
    address:['Andhra pradesh'],
    city:['Madana palli'],
    landmark:['Madana palli'],
    type:['work']
  });
  ngOnInit() {
    this.cartService.getCartCounter();
    this.messageService.cartBooks();
    this.messageService.currentMessage.subscribe((data) => {
      this.cartBooks = [];
      this.displayBooksInCart(data);
    });
    this.cartService.sendCartCounter(this.cartSize);
  }

  removeFromCart(cartBook: any) {
    console.log(cartBook);
    if (localStorage.getItem('token') === null && localStorage.getItem('cart') != null) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
      // this.cart.cartBooks = this.cart.cartBooks.filter(cartBookItem => cartBookItem.book.bookId !== cartBook.book.bookId);
      this.cart.cartBooks.forEach(element => {
        if (element.book.bookId === cartBook.book.bookId) {
          this.cart.totalBooksInCart = this.cart.totalBooksInCart - element.bookQuantity;
          this.cart.cartBooks.splice(this.cart.cartBooks.indexOf(element), 1);
        }
      });
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.cartService.sendCartCounter(this.cart.totalBooksInCart);
      this.messageService.cartBooks();
    } else {
      this.cartService.removeFromCart(cartBook.cartBookId).subscribe(
        (data: any) => {
          if (data.status === 200) {
            this.messageService.cartBooks();
            this.snackBar.open(data.message, 'ok', {
              duration: 2000,
            });
          }
        },
        (error: any) => {
          this.snackBar.open(error.error.message, 'ok', {
            duration: 2000,
          });
        }
      );
    }
  }

  displayBooksInCart(data) {
    if (localStorage.getItem('token') === null) {
      this.cartSize = data.totalBooksInCart;
      this.cart = data.cartBooks.forEach((cartBookData) => {
        this.cartBooks.push(cartBookData);
      });
    } else {
      if (data.status === 200) {
        this.cartSize = data.data.totalBooksInCart;
        data.data.cartBooks.forEach((cartBookData) => {
          this.cartBooks.push(cartBookData);
        });
      }
    }
  }

  addQuantity(cartBook: any) {
    if (localStorage.getItem('token') === null && localStorage.getItem('cart') != null) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
      if (this.cart.totalBooksInCart < 5 ) {
        this.cart.cartBooks.forEach(element => {
          if (element.book.bookId === cartBook.book.bookId) {
            if (element.bookQuantity < cartBook.book.quantity) {
              element.bookQuantity++;
              this.cart.totalBooksInCart++;
            } else {
              this.snackBar.open('book Out Of Stock' , 'ok' , { duration: 2000});
            }
          }
        });
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.cartService.sendCartCounter(this.cart.totalBooksInCart);
        this.messageService.cartBooks();
      } else {
        this.snackBar.open('Cart is full' , 'ok' , { duration: 2000});
      }
    } else {
      this.cartService.addQuantity(cartBook.cartBookId).subscribe(
        (data: any) => {
          if (data.status === 200) {
            this.cartService.sendCartCounter(data.data.totalItemsInCart);
            this.messageService.cartBooks();
            this.snackBar.open(data.message, 'ok', {
              duration: 2000,
            });
          }
        },
        (error: any) => {
          this.snackBar.open(error.error.message, 'ok', {
            duration: 20000,
          });
        }
      );
    }
  }

  toggle() {
    this.show=true;
    //this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
   /* if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";*/
  }
  continue()
  {
    this.cartService.displayBooksInCart().subscribe((response:any)=>{
      console.log("book in cart:",response);
      this.bookSum=response.data.cartBooks;
      this.bookSum.forEach(function(val){
        console.log("book1:",val);
        console.log("name:",val.book.bookName);
      });
    });
    //this.disp=!this.disp;
    this.disp=true;
  }


  removeQuantity(cartBook: any) {
    if (localStorage.getItem('token') === null && localStorage.getItem('cart') != null) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
      if (this.cart.totalBooksInCart > 0 ) {
        this.cart.cartBooks.forEach(element => {
          if (element.book.bookId === cartBook.book.bookId) {
            if (element.bookQuantity > 1) {
              element.bookQuantity--;
              this.cart.totalBooksInCart--;
            } else {
              this.snackBar.open('Cart items cant be less than 1' , 'ok' , { duration: 2000});
            }
          }
        });
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.cartService.sendCartCounter(this.cart.totalBooksInCart);
        this.messageService.cartBooks();
      } else {
        this.snackBar.open('No Items In cart To remove quantity', 'ok' , { duration: 2000});
      }
    } else {
      this.cartService.removeQuantity(cartBook.cartBookId).subscribe(
        (data: any) => {
          if (data.status === 200) {
            this.cartService.sendCartCounter(data.data.totalItemsInCart);
            this.messageService.cartBooks();
            this.snackBar.open(data.message, 'ok', {
              duration: 2000,
            });
          }
        },
        (error: any) => {
          this.snackBar.open(error.error.message, 'ok', {
            duration: 20000,
          });
        }
      );
    }
  }
  checkout(id,qty)
  {
    console.log("Ordered Successfully",id,qty);
    this.userService.checkout(id,qty).subscribe((result:any)=>{

    });
  }
}
