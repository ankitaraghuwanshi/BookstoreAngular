import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  token: any
  constructor(private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  Logout() {
    this.token = localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
    this.snackBar.open('Logout Successfully..!!!', '..', {
      duration: 3000,
    })
  }
}
