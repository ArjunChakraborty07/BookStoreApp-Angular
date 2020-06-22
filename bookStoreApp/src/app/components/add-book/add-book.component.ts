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
    image: new FormControl('', Validators.required),
  });
  ngOnInit() {}

  onFormSubmit() {
    this.dialogRef.close();
    this.vendorService.addBook(this.bookForm.value).subscribe((data) => {
      console.log(data.data);
      this.messageService.changeMessage();
    });
  }
}
