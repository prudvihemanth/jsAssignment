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

  // datepicker options
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  public fname;
  public data;
  public  lname;
  public  gender;
  public  dob;
  public  lifetime;
  public id;
  public datepicker;
  
  // update funtion to update customer profile
  update() {
    const customerObject = {}
    let body = { firstName: this.fname, lastName: this.lname, id: this.id.toString(), lifetime: this.lifetime, gender: this.gender, dob: this.datepicker.jsdate };
      this.http.post('http://54.154.48.248:8000/v1/Customer/updateCustomer', body).subscribe(data => {
        this.router.navigate(['customerProfile']);
        err => {
          alert('Something went wrong!');
        }
     });
  }

// component lifecycle hook
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