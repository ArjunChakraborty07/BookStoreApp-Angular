import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private service: UserService) { }

  showFiller = false;
  toggle = 1;
  ngOnInit() {
  }
  onLogout() {
   
  }
  users() {
    this.toggle = 1;
  }
  buyers() {
    this.toggle = 2;
  }
  sellers() {
    this.toggle = 3;
  }
  books() {
    this.toggle = 4;
  }
  booksForVerification() {
    this.toggle = 5;
  }
}
