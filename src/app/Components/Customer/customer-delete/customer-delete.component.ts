import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer.model';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  constructor(private acctivatedRoute:ActivatedRoute,private customerService: CustomerService,private router: Router) { }

customerId: any | undefined;
customer:Customer | undefined;
  ngOnInit(): void {
    debugger;
   this.customerId= this.acctivatedRoute.snapshot.paramMap.get('id');
  this.customer= this.customerService.FindCustomer(this.customerId);
  this.customerService.RemoveCustomer(this.customer);
   this.router.navigate(['Csutomers']);
  }

}
