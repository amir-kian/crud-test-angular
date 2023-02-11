export class Customer{
    Id:string;
    Firstname:string;
	Lastname:string;
	DateOfBirth:string;
	PhoneNumber:string;
	Email:string;
	BankAccountNumber:string;
    /**
     *
     */
    constructor(Id:string    ,Firstname:string,Lastname:string, DateOfBirth:string, PhoneNumber:string, Email:string, BankAccountNumber:string) {
       this.Id=Id;
        this.Firstname= Firstname;
       this.Lastname= Lastname;
       this.DateOfBirth= DateOfBirth;
       this.PhoneNumber= PhoneNumber;
       this.Email= Email;
       this.BankAccountNumber= BankAccountNumber;
    }
}