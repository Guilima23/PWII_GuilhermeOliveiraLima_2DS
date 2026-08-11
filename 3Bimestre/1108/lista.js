class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}


class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaSimples {
    constructor() {
        this.inicio = null;
    }

    adicionar(valor) {
        const novo = new Node(valor);

        if (this.inicio === null) {
            this.inicio = novo;
            return;
        }

        let atual = this.inicio;

        while (atual.proximo !== null) {
            atual = atual.proximo;
        }

        atual.proximo = novo;
    }

    mostrar() {
        let atual = this.inicio;

        while (atual !== null) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
}

const lista = new ListaSimples();

lista.adicionar(10);
lista.adicionar(20);
lista.adicionar(30);



10
20
30





class Node {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }
}

class ListaDupla {
    constructor() {
        this.inicio = null;
    }

    adicionar(valor) {
        const novo = new Node(valor);

        if (this.inicio === null) {
            this.inicio = novo;
            return;
        }

        let atual = this.inicio;

        while (atual.proximo !== null) {
            atual = atual.proximo;
        }

        atual.proximo = novo;
        novo.anterior = atual;
    }
}








class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaCircular {
    constructor() {
        this.inicio = null;
    }

    adicionar(valor) {
        const novo = new Node(valor);

        if (this.inicio === null) {
            this.inicio = novo;
            novo.proximo = this.inicio;
            return;
        }

        let atual = this.inicio;

        while (atual.proximo !== this.inicio) {
            atual = atual.proximo;
        }

        atual.proximo = novo;
        novo.proximo = this.inicio;
    }
}