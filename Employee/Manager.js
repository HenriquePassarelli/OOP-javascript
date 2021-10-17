import { Employee } from "./Employee.js";

export class Manager extends Employee {
    constructor(name, payment, cpf) {
        super(name, payment, cpf);
        this._bonus = 1.1;
    }
}