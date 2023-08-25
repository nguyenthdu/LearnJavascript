var account = {
    name: 'Alex',
    balance: 0,
    credit(value){
    this.balance += value;
    console.log(this.balance);
    },
    describe(){
		console.log(`Your name is ${this.name} and balance is ${this.balance}`);
	}
};

account.credit(1000);
account.describe();