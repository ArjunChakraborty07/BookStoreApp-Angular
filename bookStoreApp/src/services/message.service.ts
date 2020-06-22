import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VendorService } from './vendor.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSource = new BehaviorSubject(Response);
  currentMessage = this.messageSource.asObservable();
  constructor(private vendorService: VendorService) {}

  changeMessage() {
    this.vendorService.displayBooks().subscribe((data) => {
      this.messageSource.next(data);
    });
  }
}
