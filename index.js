
import { Client } from './Client.js';
import {Manager} from './Employee/Manager.js';
import {Director} from './Employee/Director.js';
import { AuthenticateSystem } from './AuthenticateSystem.js';

const director = new Director('henrique',10000,1647164569)
director.setpassword('123456')
const manager = new Manager('passarelli',10000,1647164569)
manager.setpassword('123456')

const client1 = new Client("henrique", 42569875125)
const managerIsLogged = AuthenticateSystem.login(manager,'123456')
const directorIsLogged = AuthenticateSystem.login(director,'123456')


const clientIsLogged = AuthenticateSystem.login(client1,'123456')

console.log(managerIsLogged,directorIsLogged,clientIsLogged)
console.log(client1)