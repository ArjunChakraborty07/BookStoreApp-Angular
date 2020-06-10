import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PasswordValidator } from 'src/app/shared/passwordValidator';
import { ResetPassword } from 'src/models/reset-password.model';
import { EncrDecrService } from 'src/services/encr-decr.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  hide = true;
  hide1 = true;
  private encryptPassword: string;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router:Router,
              private route:ActivatedRoute,
              private snackBar: MatSnackBar,private encrDecr : EncrDecrService) { }
  private resetPasswordForm :FormGroup ;
  private resetPassword : ResetPassword;
  private token : string;
  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['',[Validators.required,Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})/)]],
      confirmPassword: ['',[Validators.required]]
    },{validator: PasswordValidator});

    this.token = this.route.snapshot.paramMap.get('token');
  }

  onConfirm(){
  
    this.resetPassword.password = this.encrDecr.set('123456$#@$^@1ERF',this.resetPasswordForm.get('password').value);
    // console.log(this.resetPassword.password);
    this.userService.resetPassword(this.resetPassword,this.token).subscribe((response:any)=>{
      console.log(response)
      if(response.statusCode === 200){
        this.snackBar.open(response.message,'ok',{duration:3000});
        this.router.navigate(['login']);
      }
    },(error:any)=>{
      this.snackBar.open(error.error.error,'ok',{duration:3000});
    });
    
  }

}
