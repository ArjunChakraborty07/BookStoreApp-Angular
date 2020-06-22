import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/services/vendor.service';
import { MessageService } from 'src/services/message.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss'],
})
export class DisplayBooksComponent implements OnInit {
  books = [];

  constructor(
    private vendorService: VendorService,
    private messageService: MessageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.messageService.currentMessage.subscribe((data) => {
      this.books = [];
      this.onDisplayBooks(data);
    });
  }

  onDisplayBooks(data) {
    if (data.status === 200) {
      data.data.forEach((bookData) => {
        this.books.push(bookData);
      });
      this.snackBar.open(data.message, 'ok', {
        duration: 2000,
      });
    }
  }

  onDeleteBook(bookId) {
    console.log(bookId);
    this.vendorService.deleteBooks(bookId).subscribe(
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
}
