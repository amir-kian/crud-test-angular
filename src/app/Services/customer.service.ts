import { Injectable } from '@angular/core';
import { Customer } from '../Models/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   Customers: Customer[] = [
    {Id:"1",Firstname:"amir", Lastname:"Javaheri kian", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Id:"2",Firstname:"Younes", Lastname:"Kopaei", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Id:"3",Firstname:"Omid", Lastname:"Kashfi", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Id:"4",Firstname:"Zahra", Lastname:"Hashemi", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Id:"5",Firstname:"Ali", Lastname:"Baradaran", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},
    {Id:"6",Firstname:"Alireza", Lastname:"Masali", DateOfBirth:"10/10/1992", PhoneNumber:"09365580345", Email:"javaheri_kian@yahoo.com", BankAccountNumber:"123456789"},

  ];
  constructor() { 
    localStorage.setItem("Customers", JSON.stringify(this.Customers));

  }
  GetCustomers(): any {
return  JSON.parse(localStorage.getItem('Customers')|| '{}');
  }
  AddCustomer(customer:any): any {
    var result=  JSON.parse(localStorage.getItem('Customers')|| '{}');
    result.push(customer);
    localStorage.removeItem('Customers');
    localStorage.setItem("Customers", JSON.stringify(result));


      }
      FindCustomer(customerId:any): any {
        var result=  JSON.parse(localStorage.getItem('Customers')|| '{}');
        result = result.find((element: any) => element.Id==customerId);
return result;
    
          }
          UpdateCustomer(customer:any): any {
            debugger;
            var items=  JSON.parse(localStorage.getItem('Customers')|| '{}');
           var result = items.find((element: any) => element.Id==customer.Id);
            let index = items.indexOf(result);
            items[index] = customer;
            console.log('updated items:',items);
            localStorage.removeItem('Customers');
            localStorage.setItem("Customers", JSON.stringify(items));
              }
      RemoveCustomer(customer:any): any {
        var result=  JSON.parse(localStorage.getItem('Customers')|| '{}');
        result = result.filter((item: any) => item.Id !== customer.Id);
        localStorage.removeItem('Customers');
        localStorage.setItem("Customers", JSON.stringify(result));
 
    
          }

}
