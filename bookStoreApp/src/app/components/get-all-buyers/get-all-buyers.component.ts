import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-get-all-buyers',
  templateUrl: './get-all-buyers.component.html',
  styleUrls: ['./get-all-buyers.component.scss']
})
export class GetAllBuyersComponent implements OnInit {

  constructor(private service: AdminService) { }

  profile =  './assets/images/user.png';
  users: any;

  ngOnInit() {
    this.service.getAllBuyers().subscribe((data: any) => {
      this.users = data.data;
      console.log(data);
    });
  }

}
