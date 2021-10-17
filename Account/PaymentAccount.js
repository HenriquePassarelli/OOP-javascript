import { Account } from './Accont.js';

export class PaymentAccount extends Account{
    constructor(client){
        super(0,100,client);
    }

    withdraw(value) {
        let tax = 1.1
        return this._withdraw(value,tax);
    }
}