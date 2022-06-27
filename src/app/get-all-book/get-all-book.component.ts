import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
  
  booksArray: any = [];
  bookQuantity : any;
  Bookie:any;
  orderQuantity=1;
  constructor(private Bookser: BookService) { }

  ngOnInit(): void {
    this.getallBook();
  }
  getallBook() {
    this.Bookser.getBookList().subscribe(
      (response: any) => {
        this.booksArray = response.response;
        console.log(response);
     

      }
    )
  }
  lowtohigh(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);
    }
  hightolow(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.booksArray.reverse();
  }
}
