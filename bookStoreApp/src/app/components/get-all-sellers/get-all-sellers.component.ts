import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { MatSnackBar } from '@angular/material';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-get-all-sellers',
  templateUrl: './get-all-sellers.component.html',
  styleUrls: ['./get-all-sellers.component.scss']
})
export class GetAllSellersComponent implements OnInit {

  constructor(private service: AdminService,
              private messageService: MessageService,
              private snackBar: MatSnackBar) { }

  profile = './assets/images/user.png';
  users: any;
  counter = 0;
  ngOnInit() {
    this.messageService.currentMessage.subscribe((data: any) => {
      this.service.getAllSellers().subscribe(( datas: any) => {
      console.log(data);
      this.users = datas.data;
    },
      (error: any) => {
        this.snackBar.open(error.error.message, 'ok', { duration: 2000 });
      });
    });
  }
  onLink(user: any) {
    window.location.reload();
    localStorage.setItem('sellerId', user.id);
  }

}
