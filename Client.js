export class Client {
    
    constructor(name, cpf,password) {
        this.name = name;
        this._cpf = cpf;
        this._password = password;
    }

    get cpf(){
        return this._cpf;
    }

    authenticate(){
        return true
    }
}