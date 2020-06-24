import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-getallusers',
  templateUrl: './getallusers.component.html',
  styleUrls: ['./getallusers.component.scss']
})
export class GetallusersComponent implements OnInit {

  constructor(private service: AdminService) { }

  profile =  './assets/images/user.png';
  users: any;

  ngOnInit() {
    this.service.getAllUsers().subscribe((data: any) => {
      this.users = data.data;
      console.log(data);
    });

  }

}
