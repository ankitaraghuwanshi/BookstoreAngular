import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private User: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
     
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      PhoneNumber: ['', [Validators.required,Validators.minLength(10)]]

    });
  }
  onsubmit() {
    this.submitted = true;
    console.log("api call")
    if (this.registerForm.valid) {

      let reqdata = {
        fullName: this.registerForm.value.FullName,
        email: this.registerForm.value.Email,
        Password: this.registerForm.value.Password,
        mobileNumber: this.registerForm.value.PhoneNumber,

      }
      this.User.registration(reqdata).subscribe((response: any) => {
        console.log(response);
      })
    }
  }
}
