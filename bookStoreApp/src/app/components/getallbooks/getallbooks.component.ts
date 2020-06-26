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


  books: any;
  cards = [this.books];


  constructor(private bookservice: BookService) { }


  ngOnInit() {
    this.loadAllBooks();

  }

  private loadAllBooks() {
    this.bookservice.getAllbooks().pipe(first()).subscribe(books => {
      this.books = books;
    });

  }



}
