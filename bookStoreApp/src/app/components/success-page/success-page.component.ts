import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit {




  constructor(public dialog: MatDialog) { }


  ngOnInit() {

  }

  openDialog() {
    this.dialog.open(ReviewComponent, {width: '30%'});
  }
}
