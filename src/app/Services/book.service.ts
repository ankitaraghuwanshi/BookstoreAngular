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
}
