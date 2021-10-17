import { Account } from './Accont.js';

export class Savings extends Account {

    constructor(initialBalance, name, agency) {
        super(initialBalance, name, agency);
    }
    
    withdraw(value) {
        if (this._balance >= value) {
            this._balance -= value;
            return value;
        }
    }

}