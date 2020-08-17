import { Component, OnInit } from '@angular/core';
import { CartModule } from 'src/models/cart/cart.module';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-discount-coupons',
  templateUrl: './discount-coupons.component.html',
  styleUrls: ['./discount-coupons.component.scss']
})
export class DiscountCouponsComponent implements OnInit {

  cartSize: number;
  cartBooks: any = [];
  cart: CartModule;
  constructor(
  private messageService: MessageService) {}

  
  ngOnInit() {
    this.messageService.cartMessage.subscribe((data) => {
      this.cartBooks = [];
      this.displayBooksInCart(data);
    });
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
}



