import { Injectable } from '@angular/core';
import { Customer } from '../Models/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   Customers: Customer[] = [
    {Firstname:"amir", Lastname:"Javaheri kian", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Firstname:"Younes", Lastname:"Kopaei", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Firstname:"Omid", Lastname:"Kashfi", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Firstname:"Zahra", Lastname:"Hashemi", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Firstname:"Ali", Lastname:"Baradaran", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Firstname:"Alireza", Lastname:"Masali", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},

  ];
  constructor() { 
    localStorage.setItem("names", JSON.stringify(this.Customers));

  }
}
