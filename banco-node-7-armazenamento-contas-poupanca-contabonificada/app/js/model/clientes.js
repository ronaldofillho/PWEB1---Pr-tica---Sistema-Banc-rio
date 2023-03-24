class Clientes {
    _clientes;
    constructor() {
        this._clientes = new Array;
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        let index = this._clientes.findIndex(cliente => cliente.cpf == cpf);
        if (index !== -1) {
            this._clientes.splice(index, 1);
        }
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.find((cliente) => cliente.cpf == cpf);
    }
}
