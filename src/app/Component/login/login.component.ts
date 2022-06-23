import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  token: any;
  Users:any
  constructor(private formBuilder: FormBuilder, private User: UserService) {
    this.token = localStorage.getItem("token")
   }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
    
  }
  OnSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      let reqdata = {
        email: this.loginForm.value.Email,
        password: this.loginForm.value.Password,
      }
      this.User.login(reqdata).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.data);
      })
    }
   

  }
}
