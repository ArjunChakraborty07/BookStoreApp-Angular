import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from 'src/services/book.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../getallbooks/getallbooks.component';

@Component({
  selector: 'app-view-wishlist',
  templateUrl: './view-wishlist.component.html',
  styleUrls: ['./view-wishlist.component.scss']
})
export class ViewWishlistComponent implements OnInit {

  books: any;

  
  constructor(private bookservice: BookService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.loadwishlist();
  }



  private loadwishlist() {
    this.bookservice.viewWishlist().subscribe((data: any) => {
      this.books = data.data;
      
    },
    );
  }
}
