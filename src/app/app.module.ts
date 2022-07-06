import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Component/signup/signup.component';
import { LoginComponent } from './Component/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

 import {MatInputModule} from '@angular/material/input';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ResetComponent } from './Component/reset/reset.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { GetAllBookComponent } from './get-all-book/get-all-book.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { CartComponent } from './Component/cart/cart.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrderComponent } from './Component/order/order.component';
import { OrderplacedComponent } from './Component/orderplaced/orderplaced.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetComponent,
    DashboardComponent,
    GetAllBookComponent,
    QuickviewComponent,
    CartComponent,
    WishlistComponent,
    OrderComponent,
    OrderplacedComponent,
   
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatFormFieldModule,MatCardModule,MatInputModule,FormsModule,ReactiveFormsModule,HttpClientModule,HttpClientModule,
    MatToolbarModule,MatIconModule,MatMenuModule,MatSelectModule,MatSnackBarModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
