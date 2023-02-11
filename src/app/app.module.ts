import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './Components/Customer/customer-list/customer-list.component';
import { CustomerRegisterComponent } from './Components/Customer/customer-register/customer-register.component';
import { CustomerUpdateComponent } from './Components/Customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Components/Customer/customer-delete/customer-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
const appRoute:Routes=[
  {path:'' ,component:CustomerListComponent},
  {path:'Csutomers' ,component:CustomerListComponent},
  {path:'RegisterCustomer' ,component:CustomerRegisterComponent},
  {path:'DeleteCustomer/:id' ,component:CustomerDeleteComponent},
  {path:'UpdateCustomer/:id' ,component:CustomerUpdateComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerRegisterComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
