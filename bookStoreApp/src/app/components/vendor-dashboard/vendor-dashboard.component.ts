import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss'],
})
export class VendorDashboardComponent implements OnInit {
  isBookFormOpened = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openBookForm() {
    this.dialog.open(AddBookComponent, {
      panelClass: 'custom-modalbox',
    });
  }
}
