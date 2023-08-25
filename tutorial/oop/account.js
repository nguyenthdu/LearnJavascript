class Account{
  constructor(name){
  	this.name = name;
    this.balance = 0;
  }
  credit(amount){
  	this.balance += amount;
  }
  describe(){
		return "Name: " + this.name + "\nBalance: " + this.balance;
	}
}
const account = new Account("educative");
account.credit(1000);
console.log(account.describe());