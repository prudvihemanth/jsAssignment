import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MyDatePickerModule } from 'mydatepicker';
import {HttpClientModule} from '@angular/common/http';
import { ButtonRenderComponentComponent } from './button-render-component/button-render-component.component';
import {SharedserviceService} from './sharedservice.service'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerlistComponent,
    CustomerprofileComponent,
    ButtonRenderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SmartTableModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NoopAnimationsModule,
    HttpClientModule,
    MyDatePickerModule
  ],
  providers: [SharedserviceService],
  entryComponents: [ButtonRenderComponentComponent],  
  bootstrap: [AppComponent]
})
export class AppModule { }

