class Node {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

Podemos criar:

const raiz = new Node(10);

raiz.esquerda = new Node(5);
raiz.direita = new Node(20);

raiz.esquerda.esquerda = new Node(2);
raiz.esquerda.direita = new Node(7);

13. Árvore Binária de Busca (BST)
Na Binary Search Tree, ou árvore binária de busca:

valores menores ficam à esquerda;
valores maiores ficam à direita.
        10
       /  \
      5    20
     / \
    2   7

Podemos inserir valores assim:

class Node {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

function inserir(raiz, valor) {
    if (raiz === null) {
        return new Node(valor);
    }

    if (valor < raiz.valor) {
        raiz.esquerda = inserir(raiz.esquerda, valor);
    } else {
        raiz.direita = inserir(raiz.direita, valor);
    }

    return raiz;
}

let raiz = null;

raiz = inserir(raiz, 10);
raiz = inserir(raiz, 5);
raiz = inserir(raiz, 20);
raiz = inserir(raiz, 7);