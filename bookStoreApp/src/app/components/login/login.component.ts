import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/services/user.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "dashboard/login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide = true;
  LoginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  title = "Login";
  error = "";
  role: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      username: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
      role: ["", Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.LoginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    console.log("Submitting");
    if (!this.LoginForm.valid) {
      console.log(
        "Form not valid. Please check that fields are correctly filled in"
      );
      return;
    }

    this.loading = true;
    this.userService.login(this.LoginForm.value).subscribe((response: any) => {
      console.log(response);
      if (response.statusCode === 200) {
        this.router.navigate(["/DashBoard"]);
        console.log("user has been successfully logged in");
        this.snackBar.open(response.message, "ok", { duration: 5000 });
      }
      (error) => {
        console.log(error);
        this.loading = false;
        if (error.status === 401) {
          this.snackBar.open(error.error.error, "ok", { duration: 2000 });
        }
      };
    });
  }
}
