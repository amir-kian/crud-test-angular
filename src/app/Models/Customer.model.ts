export class Customer{
    Firstname:string;
	Lastname:string;
	DateOfBirth:string;
	PhoneNumber:string;
	Email:string;
	BankAccountNumber:string;
    /**
     *
     */
    constructor(    Firstname:string,Lastname:string, DateOfBirth:string, PhoneNumber:string, Email:string, BankAccountNumber:string) {
       this.Firstname= Firstname;
       this.Lastname= Lastname;
       this.DateOfBirth= DateOfBirth;
       this.PhoneNumber= PhoneNumber;
       this.Email= Email;
       this.BankAccountNumber= BankAccountNumber;
    }
}