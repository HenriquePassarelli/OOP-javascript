import { Client } from "./Client.js";
export class Account {
    static accontAmount = 0; // the static refers to all accounts
    

    constructor(agency,client) {
        this._agency = agency;
        this._client = client;
        Account.accontAmount++
    }

    set client(newClient) {
        if(newClient instanceof Client){
            this._client = newClient;
        }
    }

    get client() {
        return this._client;
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