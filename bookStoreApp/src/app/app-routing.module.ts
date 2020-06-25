import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerificationComponent } from './components/verification/verification.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AdminComponent } from './components/admin/admin.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { GetallusersComponent } from './components/getallusers/getallusers.component';
import { GetAllBuyersComponent } from './components/get-all-buyers/get-all-buyers.component';
import { GetAllSellersComponent } from './components/get-all-sellers/get-all-sellers.component';
import { GetBooksComponent } from './components/get-books/get-books.component';
import { GetBooksForVerificationComponent } from './components/get-books-for-verification/get-books-for-verification.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'verification/:token', component: VerificationComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  { path: 'admin/:token', component: AdminComponent },
  { path: 'addbook', component: AddBookComponent },
  { path: 'updateBook', component: UpdateBookComponent },
  { path: 'users', component: GetallusersComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [],
  },
  {
    path: 'admin-dashboard',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: GetallusersComponent },
      { path: 'buyers', component: GetAllBuyersComponent },
      { path: 'sellers', component: GetAllSellersComponent },
      { path: 'books', component: GetBooksComponent },
      {
        path: 'booksForVerification',
        component: GetBooksForVerificationComponent,
      },
    ],
  },
  {
    path: 'vendor-dashboard',
    component: VendorDashboardComponent,
    children: [
      { path: '', redirectTo: 'display-books', pathMatch: 'full' },
      {
        path: 'display-books',
        component: DisplayBooksComponent,
      },
    ],
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
  AdminComponent,
];
