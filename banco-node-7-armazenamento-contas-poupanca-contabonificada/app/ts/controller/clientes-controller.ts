class ClienteController {

    private inputNome: HTMLInputElement;
    private inputConta: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private clientes: Clientes;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta = <HTMLInputElement>document.querySelector("#conta");
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, new Conta (this.inputConta.value))
        this.clientes.inserir(novoCliente);
        this.inserirHTMLCliente(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirHTMLCliente(cliente);
            }
        );
    }

    inserirHTMLCliente(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo o cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.querySelector('#cliente').appendChild(elementoP);
    }
}