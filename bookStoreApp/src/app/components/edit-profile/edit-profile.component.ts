import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profile: string = localStorage.getItem('image');
  username: string = localStorage.getItem('username');
  usermail: string = localStorage.getItem('email');
  fullname: string = localStorage.getItem('name');
  mobile = localStorage.getItem('mobile');
  constructor() { }

  ngOnInit() {
  }

}
