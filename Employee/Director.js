import { Employee } from "./Employee.js";

export class Director extends Employee {
    constructor(name, payment, cpf) {
        super(name, payment, cpf);
        this._bonus = 2;
    }
}