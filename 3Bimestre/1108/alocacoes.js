let pessoa = {
    nome: "Carlos",
    idade: 25
};

O objeto foi criado durante a execução.

Podemos criar vários objetos dinamicamente:

let pessoas = [];

pessoas.push({
    nome: "Ana",
    idade: 20
});

pessoas.push({
    nome: "João",
    idade: 30
});

Quando um objeto deixa de ser referenciado, o JavaScript pode posteriormente liberar sua memória:

let pessoa = {
    nome: "Ana"
};

pessoa = null;