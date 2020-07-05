import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { MatDialog } from '@angular/material';
import { ReviewComponent } from '../review/review.component';
import {AdminService} from 'src/services/admin.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit {

  btnName="Review";
  constructor(private userService: UserService,
              private dialog: MatDialog,
              private Adminservice: AdminService,
              private router: Router)
  { 
     /* this.userService.getmyOrders().subscribe((response:any)=>{

      });*/
  }
  openDialog() {
    this.dialog.open(ReviewComponent, {width: '30%'});
    this.btnName="4.5";
  }
  ngOnInit() {
  }
  Logout() {
    console.log('CAME TO LOGOUT');
    this.Adminservice.logout().subscribe();
    localStorage.clear();
    console.log(localStorage.length);
    this.router.navigate(['/dashboard']);
  }

}
