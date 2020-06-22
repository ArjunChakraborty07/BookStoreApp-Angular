import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DashboardService } from 'src/services/dashboard.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any;
  searchBook: string;
  books: any;
  profile:string;
  login:boolean;
  username:string;
  usermail:string;
  updateStats: any;
  file:any;
  constructor(private userService: UserService,
              private service: DashboardService, 
              private router: Router,
              public dialog: MatDialog) 
  {
     if(localStorage.length===0)
     {
       this.login=false;
       console.log("note logged");
       this.profile='./assets/images/user.png';
     }
     else
     {
       console.log("logged in");
       this.login=true;
       this.username=localStorage.getItem('name');
       this.usermail=localStorage.getItem('email');
       if(localStorage.getItem('image').length===0)
         this.profile="./assets/images/user.png";
       else
         this.profile=localStorage.getItem("image");
     }
  }
  openDialogztoedit()
  {
        this.dialog.open(EditProfileComponent);  
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '40%',
      height:'90%'
      
      
    });
  }
  ngOnInit() {}
  onSearch() {
    this.service.search(this.searchBook).subscribe((response: any) => {
      this.books = response;
    });
  }
  onCart() {
    this.router.navigate(['/dashboard/cart']);
  }
  onBookStore() {
    this.router.navigate(['/books']);
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
  onsignup()
  {
    this.router.navigate(['/register']);
  }
  Logout()
  {
    console.log("CAME TO LOGOUT");
    localStorage.clear();
    console.log(localStorage.length);
    this.router.navigate(['/dashboard']);
  }
  OnSelectedFile(event)
  {
    console.log(event.target.files[0]);
    if(event.target.files.length>0)
    {
      this.file=event.target.files[0];
      const formData = new FormData();  
      formData.append('file', this.file);  
      this.file.inProgress = true;
      console.log("FormData:",formData.get('file'));
      this.userService.uploadProfie(formData).subscribe((result:any)=>{
      console.log("PROFILE RESULT:",result);
      localStorage.setItem("image",result.data['imageUrl']);
      this.profile=result.data.imageUrl;
      console.log(this.profile)
      });
    }
  }
}