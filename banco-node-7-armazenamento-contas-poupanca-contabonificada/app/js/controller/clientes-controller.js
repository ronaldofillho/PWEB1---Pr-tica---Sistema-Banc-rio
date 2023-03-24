class ClienteController {
    inputNome;
    inputConta;
    inputCpf;
    clientes;
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.inputConta = document.querySelector("#conta");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, new Conta(this.inputConta.value));
        this.clientes.inserir(novoCliente);
        this.inserirHTMLCliente(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirHTMLCliente(cliente);
        });
    }
    inserirHTMLCliente(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo o cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.querySelector('#cliente').appendChild(elementoP);
    }
}
