import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerificationComponent } from './components/verification/verification.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'verification/:token', component: VerificationComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [],
  },
  {
    path: 'vendor-dashboard',
    component: VendorDashboardComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  RegisterComponent,
  DashboardComponent,
  LoginComponent,
  ForgotPasswordComponent,
  VerificationComponent,
  ResetPasswordComponent,
];
