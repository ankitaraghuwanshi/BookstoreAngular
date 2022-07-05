import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token: any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }

  getOrderList() {
    this.token = localStorage.getItem('token')

    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }

    return this.httpService.getService('Order/GetAllOrder', true, header)
  }
}
