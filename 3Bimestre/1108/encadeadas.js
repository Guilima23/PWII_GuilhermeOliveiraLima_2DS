class Lista {
    constructor() {
        this.inicio = null;
    }

    inserirInicio(valor) {
        const novo = {
            valor: valor,
            proximo: this.inicio
        };

        this.inicio = novo;
    }

    mostrar() {
        let atual = this.inicio;

        while (atual !== null) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
}

const lista = new Lista();

lista.inserirInicio(10);
lista.inserirInicio(20);
lista.inserirInicio(30);

lista.mostrar();