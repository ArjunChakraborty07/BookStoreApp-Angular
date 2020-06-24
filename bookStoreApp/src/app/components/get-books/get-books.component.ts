import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {

  constructor(private service: AdminService) { }

  profile: './assets/images/user.png';
  users: any;

  ngOnInit() {
    this.service.getAllBooks().subscribe((data: any) => {
      this.users = data.data;
      console.log(data);
    });
  }

}
