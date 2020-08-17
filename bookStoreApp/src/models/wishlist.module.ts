import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class WishlistModule { 
  wishlistId: any;
  totalBooksInWishlist: number;
  wishlistBooks: any = [];
}
