import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { LoginComponent } from './Component/login/login.component';
import { ResetComponent } from './Component/reset/reset.component';

import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
 {path:'reset/:token',component:ResetComponent},
 {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
