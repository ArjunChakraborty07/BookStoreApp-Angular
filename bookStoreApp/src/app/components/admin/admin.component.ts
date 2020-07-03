import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
  }
  onLogout() {
   this.service.logout().subscribe();
   localStorage.clear();
   this.router.navigate(['admin-login']);
  }
  navigateTo() {
    this.router.navigate(['/admin-dashboard']);
  }
}
