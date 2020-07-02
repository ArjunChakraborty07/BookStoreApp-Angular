import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CartBookModule {
  cartId: any;
  totalBooksInCart: any;
  cartBooks: any = [];
}
