import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;
  constructor(private httpService: HttpService) { 
    this.token=localStorage.getItem("token"); 
  }

  registration(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'

      })
    }
   
    return this.httpService.postService('User/register', reqdata, false, header)
  }
  login(reqdata: any) {
    console.log(reqdata);

    let headeroption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.postService('User/login', reqdata, false, headeroption)
  }
  forgotPassword(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'token'
      })
    }
    return this.httpService.postService(`User/ForgotPassword/${reqdata.email}`, reqdata, true, header)
  }
  resetPassword(reqdata: any, token: any) {
    console.log(reqdata)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + token
      })

    }
    return this.httpService.putService(`User/ResetPassword/${reqdata.newPassword}/${reqdata.confirmPassword}`, reqdata, true, header)
  }

}
