import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public hide:boolean=true;
  profile:string=localStorage.getItem('image');
  username:string=localStorage.getItem('username');
  password:string;
  usermail:string=localStorage.getItem('email');
  fullname:string=localStorage.getItem('name');
  mobile=localStorage.getItem('mobile');
  constructor() { }

  ngOnInit() {
  }
  update()
  {
    console.log("to update");
    console.log(this.fullname);
    console.log(this.password);
  }
}
