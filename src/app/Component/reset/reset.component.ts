import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;
  token: any
  constructor(private formBuilder: FormBuilder, private User: UserService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activateRoute.snapshot.paramMap.get('token')
    this.resetPasswordForm = this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  OnSubmit() {

    this.submitted = true;

    if (this.resetPasswordForm.valid) {
      let reqdata = {
        newPassword: this.resetPasswordForm.value.newpassword,
        confirmPassword: this.resetPasswordForm.value.confirmPassword
      }
      console.log(this.token);
      console.log(reqdata);
      this.User.resetPassword(reqdata, this.token).subscribe((response: any) => {
        console.log(response)
      })




    }
  }
}
