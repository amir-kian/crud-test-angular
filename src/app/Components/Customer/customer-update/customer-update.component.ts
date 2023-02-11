import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer.model';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private acctivatedRoute:ActivatedRoute,private customerService: CustomerService,private router: Router) { }
  customerId: any | undefined;
  customer: any;

  ngOnInit(): void {
    debugger;
   this.customerId= this.acctivatedRoute.snapshot.paramMap.get('id');
  this.customer= this.customerService.FindCustomer(this.customerId);
  console.log('the customer find:',this.customer);
  }

  onSubmit(CustomerForm: NgForm) {
    this.customer=CustomerForm.value;
    console.log('this.CustomerModel:',this.customer);
     this.customerService.UpdateCustomer(this.customer) ;
     this.router.navigate(['Csutomers']);


  }

}
