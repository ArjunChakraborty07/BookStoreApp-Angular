import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { BookService } from 'src/services/book.service';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  countResult:any;
  books: any;
  // cards = [this.books];


  constructor(private bookservice: BookService) { }


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

private getItems(){
  this.bookservice.getNumberOfItems().subscribe((data: any)=>{
  this.countResult =data.data;
  },
  );
}
}