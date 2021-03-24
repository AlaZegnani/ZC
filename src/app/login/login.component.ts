import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'demoApp';
  email: string;
  password: string;
  remail: string;
  rpassword: string;
  rcpassword: string;

  ngOnInit(): void {
  }


  constructor(private snackBar: MatSnackBar){

  }
  register() {

  }
  login() {
    if (this.email === 'admin' && this.password === 'admin'){
      this.snackBar.open('Login Successful', '', {duration: 1000});
    } else{
      this.snackBar.open('Login error', '', {duration: 1000});
    }
  }
}
