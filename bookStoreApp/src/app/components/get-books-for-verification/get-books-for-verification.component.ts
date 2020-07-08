import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/services/vendor.service';
import { MessageService } from 'src/services/message.service';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-get-books-for-verification',
  templateUrl: './get-books-for-verification.component.html',
  styleUrls: ['./get-books-for-verification.component.scss']
})
export class GetBooksForVerificationComponent implements OnInit {

  books: any;
  response: any;

  counter = 0;

  constructor(
    private service: AdminService,
    private snackBar: MatSnackBar,
    private messageService: MessageService
  ) { }

  ngOnInit() {

    this.messageService.currentMessage.subscribe((data: any) => {
    this.service.getAllBooksForVerification().subscribe(( datas: any) => {
      this.books = datas.data;
      console.log(this.books);
      this.snackBar.open(datas.message, 'ok', { duration: 5000 });
    });
  });
  }
  onApprove(book: any) {

    this.service.verfy(book.bookId, localStorage.getItem('sellerId'), true).subscribe((data: any) => {
      this.snackBar.open(data.message, 'ok', { duration: 5000 });
      this.counter = book.bookId;
    });
  }
  onReject(book: any) {

    this.service.verfy(book.bookId, localStorage.getItem('sellerId'), false).subscribe((data: any) => {
      this.snackBar.open(data.message, 'ok', { duration: 5000 });
      this.counter = book.bookId;
    });
  }
}
