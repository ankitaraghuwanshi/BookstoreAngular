import { Component, OnInit, VERSION } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  booksArray: any
  BookId: any
  Comment: any
  Rating: any
  FeedbackArray: any
  show = false;
  Quantity:any

  constructor(private Bookser: BookService) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem('bookId')
    this.getBook();

    console.log(this.BookId)
  }
  getBook() {
    let reqdata = { bookId: this.BookId }
    this.Bookser.getBookById(reqdata).subscribe(
      (response: any) => {
        this.booksArray = response.response;
        this.getFeedback();
        console.log(response);


      }
    )
  }
  AddFeedback() {
    let reqdata = { bookId: this.BookId, comment: this.Comment, rating: this.Rating }
    this.Bookser.addingfeedback(reqdata).subscribe(
      (response: any) => {
        this.getFeedback();
        console.log(response);


      }
    )
  }
  getFeedback() {
    console.log(this.BookId)
    this.Bookser.GetfeedBack(this.BookId).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.FeedbackArray = response.response;
      console.log(this.FeedbackArray);
    });
  }
  name = 'Angular ' + VERSION.major;
  value = 0;

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  hideAndShow() {
    console.log("calling hide");
    this.show = !this.show;

  }
  AddToBag() {
    let reqdata = { bookId: this.BookId, quantity: this.Quantity }
    this.Bookser.AddingToBag(reqdata).subscribe(
      (response: any) => {
       
        console.log(response);


      }
    )
  }
}