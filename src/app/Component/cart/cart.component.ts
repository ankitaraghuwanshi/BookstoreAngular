import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartArray: any
  BookId: any
  show = false;
  showOrder = false;
  addressId: any

  token: any
  addressArray: any
  showNewAdd = false


  AddressId: any
  value:any
  myaddress: any
  mycity: any
  mystate: any
  constructor(private cartservice: CartService, private snackBar: MatSnackBar, private router: Router) {

  }



  ngOnInit(): void {
    this.BookId = localStorage.getItem('bookId')
    this.getCart();
    this.getAddress();

  }
  getCart() {
    this.cartservice.getcartList().subscribe(
      (response: any) => {
        this.cartArray = response.response;
        console.log(response);


      }
    )
  }

  removeBookfromCart(cartId: any) {
    let data = {
      CartId: cartId
    }
    console.log(cartId)
    this.cartservice.removeing(data).subscribe((response: any) => {
      this.getCart()
      console.log('Removed', response);

    })
  }
  minusingBook(cartId: any, bookId: any, bookQuantity: any) {
    let data = {

      bookId: bookId,
      quantity: (bookQuantity - 1)
    }
    console.log(data)
    if (bookQuantity > 1) {
      this.cartservice.updatecartitem(cartId, data).subscribe((response: any) => {
        console.log("Cart minus Successfully", response);
        this.getCart()
      });
    }

  }
  plusingBook(cartId: any, bookId: any, bookQuantity: any) {
    let data = {

      bookId: bookId,
      quantity: (bookQuantity + 1)
    }
    console.log(data)

    this.cartservice.updatecartitem(cartId, data).subscribe((response: any) => {
      console.log("Cart plus Successfully", response);
      this.getCart()
    });

  }
  hideAndShow() {
    console.log("calling hide");
    this.show = !this.show;

  }

  hideAndShowOrder() {
    console.log("calling hide");
    this.showOrder = !this.showOrder;

  }
  getAddress() {
    this.cartservice.getAddressList().subscribe(
      (response: any) => {
        this.addressArray = response.response;

        console.log("get all Address successfully", this.addressArray);


      }
    )
  }
  hideAndShowNewAdd() {
    console.log("calling hide");
    this.showNewAdd = !this.showNewAdd;

  }

  AddOrder(BookId: any, bookQuantity: any) {
    let reqdata = { bookId: BookId, addressId: this.AddressId, bookQuantity: bookQuantity }
    this.cartservice.addingorder(reqdata).subscribe(
      (response: any) => {

        console.log(response);


        this.snackBar.open(' order placed Successfully..!!!', '..', {
          duration: 3000,
        })
        this.router.navigate(['/dashboard/orderplaced'])
      }
    )
  }
  //  adding new addresss
  AddingNewAddress() {
    let data={
      address:this.myaddress,
      typeId:this.value,
      city:this.mycity,
      state:this.mystate

    }
    this.cartservice.addnewAddress(data).subscribe(
      (response: any) => {
        console.log('Add to wishlist', response);
        this.snackBar.open('your Address added Successfully', '', {
          duration: 3000,
        })
        
      },
     
    );
  }
}


