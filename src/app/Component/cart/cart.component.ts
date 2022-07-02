import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartArray: any
  BookId: any


  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem('bookId')
    this.getCart();
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
   let data={
    
    bookId:bookId,
    quantity:(bookQuantity - 1)
   }
    console.log(data)
    if (bookQuantity > 1) {
      this.cartservice.updatecartitem(cartId,data).subscribe((response: any) => {
        console.log("Cart minus Successfully", response);
        this.getCart()
      });
    }

  }
  plusingBook(cartId: any, bookId: any, bookQuantity: any) {
    let data={
     
      bookId:bookId,
      quantity:(bookQuantity + 1)
     }
    console.log(data)

    this.cartservice.updatecartitem(cartId,data).subscribe((response: any) => {
      console.log("Cart plus Successfully", response);
      this.getCart()
    });

  }
  

}
