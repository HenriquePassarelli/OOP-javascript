import { Account } from './Accont.js';

export class MainAccount extends Account {
    static accontAmount = 0; // the static refers to all accounts

    constructor(client, agency) {
        super(client, agency);
        Account.accontAmount++
    }

}