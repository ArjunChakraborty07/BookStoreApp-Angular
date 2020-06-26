import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-get-all-sellers',
  templateUrl: './get-all-sellers.component.html',
  styleUrls: ['./get-all-sellers.component.scss']
})
export class GetAllSellersComponent implements OnInit {

  constructor(private service: AdminService,
              private snackBar: MatSnackBar) { }

  profile = './assets/images/user.png';
  users: any;

  ngOnInit() {
    this.service.getAllSellers().subscribe((data: any) => {
      this.users = data.data;
    },
      (error: any) => {
        this.snackBar.open(error.error.message, 'ok', { duration: 2000 });
      });
  }
  onLink(user: any) {
    window.location.reload();
    localStorage.setItem('sellerId', user.id);
  }

}
