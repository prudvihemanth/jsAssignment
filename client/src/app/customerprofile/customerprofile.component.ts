import { Component, OnInit, EventEmitter } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { IMyDpOptions } from 'mydatepicker';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonRenderComponentComponent } from '../button-render-component/button-render-component.component'
import { SharedserviceService } from '../sharedservice.service'



@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(private router: Router, private http: Http, private service: SharedserviceService) {
    this.source = new LocalDataSource(this.data);
  }

//date picker configuration
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

// data table settings object
  public settings = {
    actions: {
      add: false,
      edit: false,
      position: 'right',
      filter: false,
    },
    delete: {
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID'
      },
      Firstname: {
        title: 'Firstname'
      },
      Lastname: {
        title: 'Lastname'
      },
      Dob: {
        title: 'Dob'
      },
      Gender: {
        title: 'Gender'
      },
      Lifetime: {
        title: 'Lifetime',
      },
      LastContact: {
        title: 'LastContact'
      },
      button: {
        title: 'Edit',
        type: 'custom',
        renderComponent: ButtonRenderComponentComponent,
        filter: false,
        onComponentInitFunction: this.actions.bind(this)
      },
    },
  };
  data = [];

  source: LocalDataSource;
  public gender = 'Male';
  public fname;
  public lname;
  public lifetime;

  actions(instance) {
    instance.save.subscribe(row => {
      const data = JSON.stringify(row);
      this.service.recievedata(data);
      this.router.navigate(['customerList']);
    });
  }

  // this function gets all customesrs list and output to datatable
  getallCustomers() {
    this.http.get('http://54.154.48.248:8000/v1/Customer/getAllCustomers', )
      .map(res => res.json())
      .subscribe(res => {
        this.data = [];
        res.forEach(element => {
          let obj = {
            Firstname: element.name.firstName, Lastname: element.name.lastName, Gender: element.gender, Dob: element.dob, Lifetime: element.lifetime, id: element.id, LastContact: element.lastcontact
          };
          this.data.push(obj);
        });
        this.source.load(this.data);
        err => {
          alert('Something went wrong!');
        }
      });
  }

  ngOnInit() {
    this.getallCustomers();
  }


  // this function deletes already existing
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.http.get('http://54.154.48.248:8000/v1/Customer/deleteCustomer' + '/' + event.data.id).subscribe(data => {
        this.getallCustomers();
        err => {
          alert('Something went wrong!');
        }
      });
    } else {
      alert(JSON.stringify(event.data));
    }
  }

  // this function creates a new customer
  addCustomer() {
    const customerObject = {}
    let body = { firstName: this.fname, lastName: this.lname, lifetime: this.lifetime, gender: this.gender, dob: this.model.jsdate };
    if (!this.fname || !this.lname || !this.lifetime || !this.gender || !this.model.jsdate) {
      alert('All Feilds are Mandatory')
    }
    else {
      this.http.post('http://54.154.48.248:8000/v1/Customer/createCustomer', body).subscribe(data => {
        this.gender = 'Male';
        this.fname = '';
        this.lname = '';
        this.lifetime = '';
        this.model = { date: { year: 2018, month: 10, day: 9 } };
        this.data = [];
        this.getallCustomers();
        err => {
          alert('Something went wrong!');
        }
      });
    }
  }
}