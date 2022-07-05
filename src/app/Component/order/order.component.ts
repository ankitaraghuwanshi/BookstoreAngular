import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderArray:any
  BookId:any
  constructor(private orderservice:OrderService) { }

  myDate = Date.now();
  
  ngOnInit(): void {
    this.BookId = localStorage.getItem('bookId')
    this.getOrders();
  }
  getOrders() {
    this.orderservice.getOrderList().subscribe(
      (response: any) => {
        this.orderArray = response.response;
        console.log(response);


      }
    )
  }
}
