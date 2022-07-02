import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }

  getBookList() {
    this.token = localStorage.getItem('token')

    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }

    return this.httpService.getService('Book/GetAllBook', true, header)
  }

  getBookById(reqdata: any) {
    this.token = localStorage.getItem('token')

    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }

    return this.httpService.getService(`Book/GetBookByBookId/${reqdata.bookId}`, true, header)


  }
  addingfeedback(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService('Feedback/AddFeedback', reqdata, true, header)
  }

  GetfeedBack(BookId: any) {
    this.token = localStorage.getItem('token')

    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }

    return this.httpService.getService(`Feedback/GetDetailsByBookId?BookId=${BookId}`, true, header)
  }

  AddingToBag(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService('Cart/AddToCart', reqdata, true, header)
  }

  AddingToWishlist(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService(`WishList/AddToWishList/${reqdata.CartId}`, reqdata, true, header)
}
}





