class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(valor) {
        this.itens.push(valor);
    }

    desempilhar() {
        return this.itens.pop();
    }

    topo() {
        return this.itens[this.itens.length - 1];
    }
}

const pilha = new Pilha();

pilha.empilhar(10);
pilha.empilhar(20);
pilha.empilhar(30);

console.log(pilha.desempilhar()); // 30
console.log(pilha.desempilhar()); // 20

Aplicações
Pilhas são utilizadas em:

histórico de operações;
botão "desfazer";
chamadas de funções;
avaliação de expressões;
algoritmos de busca em profundidade (DFS).
7. Filas (Queue)
Uma fila segue o princípio:

FIFO — First In, First Out

Ou seja:

O primeiro elemento que entra é o primeiro que sai.

Exemplo:

Entrada
  ↓
10 → 20 → 30
↑
sai primeiro

É semelhante a uma fila de pessoas em um banco.

Implementação
class Fila {
    constructor() {
        this.itens = [];
    }

    entrar(valor) {
        this.itens.push(valor);
    }

    sair() {
        return this.itens.shift();
    }

    primeiro() {
        return this.itens[0];
    }
}

const fila = new Fila();

fila.entrar("João");
fila.entrar("Maria");
fila.entrar("Pedro");

console.log(fila.sair()); // João
console.log(fila.sair()); // Maria