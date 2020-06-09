import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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
  role: any;
  constructor(private service: UserService) { }

  ngOnInit() {
  }

  onRegister() {
    if (this.email.hasError('required') || this.name.hasError('required') ||
      this.password.hasError('required') || this.phone.hasError('required') ||
      this.username.hasError('required')) {
      alert('Cannot submit empty fields');
    } else if (this.email.hasError('email') || this.name.hasError('minlength') ||
      this.password.hasError('minlength') || this.password.hasError('maxlength') ||
      this.phone.hasError('minlength')) {
      alert('Cannot submit empty fields');
    } else if (this.role === undefined) {
      alert('Please select account type');
    } else if (isNaN(this.phone.value)) {
      alert('Phone Number should be digits only');
    } else {
      const data = {
        email: this.email.value,
        name: this.name.value,
        phone: this.phone.value,
        password: this.password.value,
        username: this.username.value,
        role: this.role
      };
      this.service.register(data).subscribe((response: any) => {
        alert(response.message);
      });
    }




  }

}
