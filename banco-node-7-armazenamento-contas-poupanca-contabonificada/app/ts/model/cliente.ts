class Cliente {

    constructor(private _nome: string, private _cpf: string, private _conta: Conta) {}

    get nome() {
        return this._nome;
    }
    set nome (nome: string) {
        this._nome = nome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf: string) {        
        this._cpf = cpf;
    }

    get conta() {
        return this._conta;
    }
    set conta(conta) {
        this._conta = conta;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta.toString()}`;
    }
}