import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { LoginComponent } from './Component/login/login.component';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { ResetComponent } from './Component/reset/reset.component';

import { SignupComponent } from './Component/signup/signup.component';
import { GetAllBookComponent } from './get-all-book/get-all-book.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'reset/:token', component: ResetComponent },

  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/getallbook', pathMatch: 'full' },
      { path: 'getallbook', component: GetAllBookComponent },
      {path:'quickview',component:QuickviewComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
