import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer.model';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  Customers: Customer[] =[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.GetCustomers();
  }

  GetCustomers(): void {
    this.Customers= this.customerService.GetCustomers() ;
    console.log('customers form service:',this.Customers);
  }

}
