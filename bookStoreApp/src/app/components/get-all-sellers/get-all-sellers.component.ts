import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-get-all-sellers',
  templateUrl: './get-all-sellers.component.html',
  styleUrls: ['./get-all-sellers.component.scss']
})
export class GetAllSellersComponent implements OnInit {

  constructor(private service: AdminService) { }

  profile =  './assets/images/user.png';
  users: any;

  ngOnInit() {
    this.service.getAllSellers().subscribe((data: any) => {
      this.users = data.data;
      console.log(data);
    });
  }

}
