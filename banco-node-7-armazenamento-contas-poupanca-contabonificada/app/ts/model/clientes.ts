class Clientes{

    private _clientes: Array<Cliente>
    constructor(){
        this._clientes = new Array<Cliente>
    }

    inserir(cliente: Cliente): void{
        this._clientes.push(cliente);
    }

    remover(cpf: string): void{
        let index: number = this._clientes.findIndex(cliente => cliente.cpf == cpf);
        if (index !== -1){
            this._clientes.splice(index, 1);
        }
    }

    listar(): Array<Cliente>{
        return this._clientes;
    }

    pesquisar(cpf: string): Cliente{
        return this._clientes.find((cliente : Cliente) => cliente.cpf == cpf);
    }
}