import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { EncrDecrService } from 'src/services/encr-decr.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('^[A-Z][a-z]+\\s?[A-Z][a-z]+$')
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
    Validators.minLength(4),
    Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
  ]));
  passwordType = 'password';
  show = false;
  radioval=0;
  selectedrole;
  constructor(private service: UserService,
    private EncrDecr: EncrDecrService,
    private router: Router,
    private dialog:MatDialog) {  }

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
    }else if (isNaN(this.phone.value)) {
      alert('Phone Number should be digits only');
    }
    else if(this.radioval==0)
    {
      alert('Select the role');
    } else {
      if(this.radioval==2)
      {
        this.selectedrole=2;
      }
       else if(this.radioval==3)
      {
        this.selectedrole=3;
      }
      const data = {
        email: this.email.value,
        name: this.name.value,
        mobileNumber: this.phone.value,
        password: this.password.value,
        userName: this.username.value,
        role:this.selectedrole
      };
      this.service.register(data).subscribe((response: any) => {
        alert(response.message);
      });
    }
  }

  onLogin() {
      const dialogRef = this.dialog.open(LoginComponent, {
     //  width: '40%',
     //  height:'90%',
      });
    //this.router.navigate(['/login']);
  }
}
