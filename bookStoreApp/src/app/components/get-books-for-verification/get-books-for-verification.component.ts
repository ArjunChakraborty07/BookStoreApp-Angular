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

  constructor(
    private service: AdminService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {

    this.service.getAllBooksForVerification().subscribe((data: any) => {
      this.books = data.data;
      this.snackBar.open(data.message, 'ok', { duration: 5000 });
    });
  }
  onApprove(book: any) {
    console.log(book);
    this.service.verfy(book.bookId, localStorage.getItem('sellerId'), true).subscribe((data: any) => {
    this.snackBar.open(data.message, 'ok', { duration: 5000 });
    window.location.reload();
    });
  }
  onReject(book: any) {
    console.log('check');
    this.service.verfy(book.bookId, localStorage.getItem('sellerId'), false).subscribe((data: any) => {
      this.response = data;
      this.snackBar.open(data.message, 'ok', { duration: 5000 });
      window.location.reload();
    });
  }
}
