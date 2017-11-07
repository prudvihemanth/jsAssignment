import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from '../customerlist/customerlist.component'
import { CustomerprofileComponent } from '../customerprofile/customerprofile.component'
import { LoginComponent } from '../login/login.component'

import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'customerList',
        component: CustomerlistComponent,
    },
    {
        path: 'customerProfile',
        component: CustomerprofileComponent,
    },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }