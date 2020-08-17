import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from 'src/models/book.model';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class WishlistBookModule { 
  wishlistBookId: number;
  bookQuantity: number;
  book: Book;
  totalBookPrice: number;
}
