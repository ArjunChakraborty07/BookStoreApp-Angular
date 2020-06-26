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

  constructor(
    private service: AdminService
  ) { }

  ngOnInit() {
    this.service.getAllBooksForVerigication().subscribe((data: any) => {
      this.books = data.data;
      console.log(data);
    });
  }
  onApprove(book: any) {
    this.service.verfy(book.bookId, book.userId, 'yes');
  }
  onReject(book: any) {
    this.service.verfy(book.bookId, book.userId, 'no');
  }
}
