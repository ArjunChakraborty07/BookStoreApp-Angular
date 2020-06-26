import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private service: AdminService, private router: Router) { }

  showFiller = false;
  toggle = 1;
  ngOnInit() {
  }
  onLogout() {
   this.service.logout().subscribe();
   localStorage.clear();
   this.router.navigate(['dashboard']);
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
