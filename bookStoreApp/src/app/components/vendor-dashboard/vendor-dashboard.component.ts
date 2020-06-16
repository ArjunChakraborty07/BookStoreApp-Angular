import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss'],
})
export class VendorDashboardComponent implements OnInit {
  isBookFormOpened = false;

  constructor() {}

  ngOnInit() {}

  openBookForm() {
    this.isBookFormOpened = true;
  }
}
