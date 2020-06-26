import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  hide = true;
  LoginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  title = 'Login';
  error = '';
  role1: number;
  logsuccess: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      loginid: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
      userroles: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.LoginForm.controls;
  }

  onSubmit() {
    this.submitted = true;


    this.role1 = 1;


    console.log('ROLE:', this.role1);
    const data = {
      loginId: this.LoginForm.get('loginid').value,
      password: this.LoginForm.get('password').value,
      role: this.role1
    };
    this.loading = true;
    this.userService.login(data).subscribe((response: any) => {
      console.log('LOGIN COMPONENT:', response);
      if (response.status === 200) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('image', response.data.imageUrl);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('username', response.data.userName);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('mobile', response.data.mobileNumber);
        localStorage.setItem('status', response.data.userStatus);

        if (this.role1 === 1) {
          this.router.navigate(['admin-dashboard']);
        }

        this.logsuccess = true;

        this.snackBar.open(response.message, 'ok', { duration: 5000 });
      }
      (error) => {

        this.loading = false;
        if (error.status === 401) {
          this.snackBar.open(error.error.error, 'ok', { duration: 2000 });
        }
      };
    });
  }

}
