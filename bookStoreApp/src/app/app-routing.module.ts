import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerificationComponent } from './components/verification/verification.component';
<<<<<<< HEAD
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'verification/:token', component: VerificationComponent},
  {path: 'resetpassword/:token', component: ResetPasswordComponent},
=======
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'verification/:token', component: VerificationComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
>>>>>>> 50360e3e63a357648c024b41cd525012840f1a5b
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, DashboardComponent, LoginComponent,
  ForgotPasswordComponent, VerificationComponent, ResetPasswordComponent];
