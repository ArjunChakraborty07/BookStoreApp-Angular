import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { EncrDecrService } from 'src/services/encr-decr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(4)
  ]));
  phone = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(10),
  ]));
  password = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(16)
  ]));
  username = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(4)
  ]));
  buyer: false;
  seller: false;
  passwordType = 'password';
  show = false;
  bvalue: any = '';
  svalue: any = '';
  constructor(private service: UserService,
    private EncrDecr: EncrDecrService,
    private router: Router) { }

  ngOnInit() { }

  onclick() {
    if (this.show) {
      this.passwordType = 'password';
      this.show = false;
    } else {
      this.passwordType = 'text';
      this.show = true;
    }
  }
  onRegister() {
    if (this.email.hasError('required') || this.name.hasError('required') ||
      this.password.hasError('required') || this.phone.hasError('required') ||
      this.username.hasError('required')) {
      alert('Cannot submit empty fields');
    } else if (this.email.hasError('email') || this.name.hasError('minlength') ||
      this.password.hasError('minlength') || this.password.hasError('maxlength') ||
      this.phone.hasError('minlength')) {
      alert('Cannot submit invalid input');
    } else if ((this.buyer === undefined || this.buyer === false) && (this.seller === undefined || this.seller === false)) {
      alert('Please select account type');
    } else if (isNaN(this.phone.value)) {
      alert('Phone Number should be digits only');
    } else {
      if (this.buyer) {
        this.bvalue = 1;
      } else {
        this.bvalue = 0;
      }
      if (this.seller) {
        this.svalue = 2;
      } else {
        this.svalue = 0;
      }
      const data = {
        email: this.email.value,
        name: this.name.value,
        phone: this.phone.value,
        password: this.password.value,
        username: this.username.value,
        role: this.bvalue + this.svalue
      };
      console.log(data);
      this.service.register(data).subscribe((response: any) => {
        alert(response.message);
      });
    }
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
