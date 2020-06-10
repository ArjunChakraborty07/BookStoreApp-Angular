import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchBook: string;
  books: any;
  constructor(private service: DashboardService, private router: Router) { }

  ngOnInit() {
  }
  onSearch() {
    this.service.search(this.searchBook).subscribe((response: any) => {
      this.books = response;
    });
  }
  onCart() {
    this.router.navigate(['/dashboard/cart']);
  }
}
