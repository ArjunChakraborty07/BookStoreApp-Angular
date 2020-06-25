import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VendorService } from 'src/services/vendor.service';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MessageService } from 'src/services/message.service';
import { Book } from 'src/models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  file: any;
  isProfile = 'false';
  bookImageUrl: any;
  book = {
    bookName: null,
    authorName: null,
    price: null,
    quantity: null,
    bookDetails: null,
    image: null,
  };
  constructor(
    private vendorService: VendorService,
    private snackBar: MatSnackBar,
    private messageService: MessageService,
    private dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  bookForm = new FormGroup({
    bookName: new FormControl('', Validators.required),
    authorName: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.min(1), Validators.required]),
    quantity: new FormControl('', [Validators.min(1), Validators.required]),
    bookDetails: new FormControl('', Validators.required),
    image: new FormControl(this.bookImageUrl, Validators.required),
  });
  ngOnInit() {}

  onFormSubmit() {
    this.dialogRef.close();
    this.book.bookName = this.bookForm.value.bookName;
    this.book.authorName = this.bookForm.value.authorName;
    this.book.price = this.bookForm.value.price;
    this.book.quantity = this.bookForm.value.quantity;
    this.book.bookDetails = this.bookForm.value.bookDetails;
    this.book.image = this.bookImageUrl;
    console.log(this.book.image);

    this.vendorService.addBook(this.book).subscribe((data) => {
      this.messageService.changeMessage();
    });
  }
  onUploadBookImage(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', this.file);
      this.file.inProgress = true;
      this.vendorService
        .uploadBookImage(formData, this.isProfile)
        .subscribe((data: any) => {
          if (data.status === 200) {
            this.bookImageUrl = data.data;
            console.log(data);
            console.log(this.bookImageUrl);
          }
        });
    }
  }
}
