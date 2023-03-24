class Cliente {
    _nome;
    _cpf;
    _conta;
    constructor(_nome, _cpf, _conta) {
        this._nome = _nome;
        this._cpf = _cpf;
        this._conta = _conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(conta) {
        this._conta = conta;
    }
    toString() {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta.toString()}`;
    }
}
