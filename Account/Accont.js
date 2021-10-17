// abstract class, cannot be instantiated directly
import { Client } from "../Client.js";
export class Account {
    
    constructor(initialBalance,agency,client) {
        if(this.caonstructor == Account){
            throw new Error("you shouldn't instantiate an object directly, because is an abstract class ")
        }
        this._balance = initialBalance;
        this._agency = agency;
        this._client = client;
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

    // Abstract Method
    withdraw(value,tax) {
        const withdrawValue = tax *value
        if (this._balance >= withdrawValue) {
            this._balance -= withdrawValue;
            return value;
        }
        return 0 
    }

    deposit(value) {        
        this._balance += value;
    }

    transference(value, account ) {
        const withdrawValue = this.withdraw(value);
        account.deposit(withdrawValue);
    }

}