import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerificationComponent } from './components/verification/verification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'verification/:token',component:VerificationComponent},
  {path:'resetpassword/:token',component:ResetPasswordComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'dashboard', redirectTo: '/dashboard/register', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, DashboardComponent];
