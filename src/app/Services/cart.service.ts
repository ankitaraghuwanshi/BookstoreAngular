import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
 }

  getcartList(){
    this.token = localStorage.getItem('token')

    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
   
    return this.httpService.getService('Cart/GetCartByUserid', true, header)
  }

  removeing(data: any) {
    this.token = localStorage.getItem('token')

    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    console.log("reqdata")
    return this.httpService.deleteService(`Cart/DeleteBook/${data.CartId}`, true, header)
  
  }
}

