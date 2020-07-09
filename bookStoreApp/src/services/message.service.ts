import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VendorService } from './vendor.service';
import { BookService } from './book.service';
import { CartServiceService } from './cart.service';
import { AdminService } from './admin.service';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  count: number;
  private dataSource = new BehaviorSubject(this.count);
  currentData = this.dataSource.asObservable();
  private messageSource = new BehaviorSubject(Response);
  currentMessage = this.messageSource.asObservable();
  private cartSource = new BehaviorSubject(Response);
  cartMessage = this.cartSource.asObservable();
  private adminBookSource = new BehaviorSubject(Response);
  adminBook = this.adminBookSource.asObservable();
  private adminSellerSource = new BehaviorSubject(Response);
  adminSeller = this.adminSellerSource.asObservable();

  constructor(
    private vendorService: VendorService,
    private bookService: BookService,
    private cartService: CartServiceService,
    private adminService: AdminService,
    private dashboardService: DashboardService
  ) { }

  changeMessage() {
    this.vendorService.displayBooks().subscribe((data) => {
      this.messageSource.next(data);
    });
  }
  searchBook(event) {
    this.bookService.searchBooks(event.target.value).subscribe((data) => {
      this.messageSource.next(data);
    });
  }

  searchUserBook(event) {
    this.dashboardService.search(event.target.value).subscribe((data) => {
      this.messageSource.next(data);
    });
  }

  changeoptionMessage() {
    this.bookService.sortbookByPriceDesc().subscribe((data) => {
      this.messageSource.next(data);
    });
  }

  changeoptionMessage1() {
    this.bookService.sortbookByPriceAsc().subscribe((data) => {
      this.messageSource.next(data);
    });
  }





  cartBooks() {
    if (localStorage.getItem('token') === null && localStorage.getItem('cart') != null) {
      this.cartSource.next(JSON.parse(localStorage.getItem('cart')));

    } else {
      this.cartService.displayBooksInCart().subscribe((data: any) => {
        this.cartSource.next(data);
        this.count = data.data.totalItemsInCart;
      });
    }
  }
  adminBookMessage() {
    this.adminService.getAllBooksForVerification().subscribe((data: any) => {
      this.adminBookSource.next(data);
    });
  }
  adminSellerMessage() {
    this.adminService.getAllSellers().subscribe((data: any) => {
      this.adminSellerSource.next(data);
    });
  }
  onCartCount() {
    this.dataSource.next(this.count);
  }

  // getCartCounter(){
  //    this.messageSource.next();
  // }
  sendCartCounter(cartSize: number) {
    this.dataSource.next(cartSize);
  }

  onGetAllBooks() {
    this.bookService.getAllbooks().subscribe((data) => {
      this.messageSource.next(data);
    });
  }
}
