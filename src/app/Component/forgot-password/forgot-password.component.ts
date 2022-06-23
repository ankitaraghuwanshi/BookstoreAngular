import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder , private User: UserService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
     
    });
  }
  onSubmit(){
    this.submitted = true;
   
    if(this.forgotPasswordForm.valid){
      let reqdata ={
        email: this.forgotPasswordForm.value.Email,
      }
      this.User.forgotPassword(reqdata).subscribe((response: any) =>{
        console.log(response)
      })
    }
  }
}
