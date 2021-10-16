import { Account } from './Accont.js';

export class Savings extends Account {   

    constructor(initialBalance,name,cpf){
        this._balance = initialBalance;
        this.name = name;
        this.cpf = cpf;
    }


    get balance() {
        return this._balance;
    }

    withdraw(value) {
        if (this._balance >= value) {
            this._balance -= value;
            return value;
        }
    }

    deposit(value) {
        if (value <= 100) {
            return
        }
        this._balance += value;
    }

    transference(value, account ) {
        const withdrawValue = this.withdraw(value);
        account.deposit(withdrawValue);
    }
}