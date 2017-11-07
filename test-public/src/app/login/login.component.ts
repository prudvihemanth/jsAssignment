import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email;
  public password;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }

  
   // login function to enter the application
  login() {
    let body = { email: this.email, password: this.password };
    if (!this.email || !this.password) { alert('Email & Password are mandatory') }
    else {
      this.http.post('http://54.154.48.248:8000/v1/Customer/login', body)
        .map(res => res.json())
        .subscribe(
        (resp) => {
          console.log(resp+'--------');

          if (resp) {
            this.router.navigate(['customerProfile']);
          }
          else {
            this.email = "";
            this.password = "";
            alert('Email/Password Entered Incorrectly!');
          }
        },
        (err) => {
          console.log(err);
          this.email = "";
          this.password = "";
          alert('Email/Password Entered Incorrectly!');
        }
        )
    };

  }
}
