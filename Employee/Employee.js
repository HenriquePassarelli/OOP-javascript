export class Employee {
    constructor(name,payment, cpf) {
        this._name = name;
        this._payment = payment;
        this._cpf = cpf;

        this._bonus = 1
        this._password 
    }

    authenticate(password){
        return password == this._password
    }

    setpassword(password){
        this._password = password;
    }
}

