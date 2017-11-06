import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service'
import { IMyDpOptions } from 'mydatepicker';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private service: SharedserviceService, private router: Router, private http: Http) { }
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };
  fname;
  data;
  lname;
  gender;
  dob;
  lifetime;
  id;
  public datepicker;

  update() {
    const customerObject = {}
    let body = { firstName: this.fname, lastName: this.lname, id: this.id.toString(), lifetime: this.lifetime, gender: this.gender, dob: this.datepicker.jsdate };
    if (!this.fname || !this.lname || !this.lifetime) {
      alert('Firstname LastName Lifetime are mandatory Fields')
    }
    else {
      this.http.post('http://54.154.48.248:8000/v1/Customer/updateCustomer', body).subscribe(data => {
        this.router.navigate(['customerProfile']);
        err => {
          alert('Something went wrong!');
        }
      });
    }
  }

  ngOnInit() {
    if (this.service.data) {
      this.data = JSON.parse(this.service.data);
      this.fname = this.data.Firstname;
      this.lname = this.data.Lastname;
      this.gender = this.data.Gender;
      this.dob = new Date(this.data.Dob);
      this.lifetime = this.data.Lifetime;
      this.id = this.data.id;
      this.datepicker = { date: { year: this.dob.getFullYear(), month: this.dob.getMonth(), day: this.dob.getDay() } };
    }
  }

}