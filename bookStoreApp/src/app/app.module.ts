import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout'
import {
  MatSnackBarModule,
  MatTooltipModule,
  MatMenuModule,
  MatMenuTrigger,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { UserService } from 'src/services/user.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerificationComponent } from './components/verification/verification.component';
import { EncrDecrService } from 'src/services/encr-decr.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpService } from 'src/services/http.service';
=======
import { UserService } from '../services/user.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpService } from 'src/services/http.service';
import { MatDialogModule} from '@angular/material/dialog';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
>>>>>>> 50360e3e63a357648c024b41cd525012840f1a5b
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerificationComponent } from './components/verification/verification.component';
import { EncrDecrService } from 'src/services/encr-decr.service';
import { MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    LoginComponent,
    ResetPasswordComponent,
    VerificationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
    FlexLayoutModule,
    MatCheckboxModule
  ],
  providers: [UserService, EncrDecrService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
