import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/Models/Customer.model';
import { CustomerService } from 'src/app/Services/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  constructor(private customerService: CustomerService,private router: Router) { }
CustomerModel: Customer | undefined;

  ngOnInit(): void {
  }
  onSubmit(CustomerForm: NgForm) {
    this.CustomerModel=CustomerForm.value;
    console.log('this.CustomerModel:',this.CustomerModel);
     this.customerService.AddCustomer(this.CustomerModel) ;
     this.router.navigate(['Csutomers']);


  }

}
