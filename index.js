
import { Client } from './Client.js';
import { Account } from './Accont.js';

const client1 = new Client("henrique", 42569875125)
const account1 = new Account(1000, client1)
const client2 = new Client("Passarelli", 425691455125)
const account2 = new Account(1000, client2)

account1.deposit(100)

console.log(account1, " ", account2)
console.log(Account.accontAmount)
