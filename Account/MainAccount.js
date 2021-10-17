import { Account } from './Accont.js';

export class MainAccount extends Account {
    static accontAmount = 0; // the static refers to all accounts

    constructor(client, agency) {
        super(0,client, agency);
        Account.accontAmount++
    }

    //override default
    withdraw(value) {
        let tax = 1.1
        return this._
    }

}