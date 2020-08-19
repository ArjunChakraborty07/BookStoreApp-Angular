import { Component, OnInit } from '@angular/core';
import { CartModule } from 'src/models/cart/cart.module';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-discount-coupons',
  templateUrl: './discount-coupons.component.html',
  styleUrls: ['./discount-coupons.component.scss']
})
export class DiscountCouponsComponent implements OnInit {

  total: number;
  check = false;
  constructor() { }

  ngOnInit() {
    this.total = parseInt(localStorage.getItem('totalPrice'), 10);
    if (this.total < 300) {
      this.check = true;
    }
    if (this.total < 500) {
      this.check = true;
    }
    if (this.total < 700) {
      this.check = true;
    }
    localStorage.setItem('coupon', '0');
    localStorage.setItem('discount', '0');
  }

  onApplySBI() {
    localStorage.setItem('coupon', 'MYSBI');
    localStorage.setItem('discount', '25');
    localStorage.setItem('priceLimit', 'check');
  }
  onApplyHDFC() {
    localStorage.setItem('coupon', 'MYHDFC');
    localStorage.setItem('discount', '20');
    localStorage.setItem('priceLimit', 'check');

  }
  onApplyPaytm() {
    localStorage.setItem('coupon', 'MYPAYTM');
    localStorage.setItem('discount', '0');
    localStorage.setItem('priceLimit', 'check');
  }
}



