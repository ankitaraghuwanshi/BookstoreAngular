import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
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
}
