import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  constructor() {}

  bookForm = new FormGroup({
    bookTitle: new FormControl(''),
    bookAuthor: new FormControl(''),
    bookPrice: new FormControl(''),
    bookQuantity: new FormControl(''),
    bookDescription: new FormControl(''),
    bookProfileName: new FormControl(''),
  });
  ngOnInit() {}

  onFormSubmit() {}
}
