const alunos = new Map();

alunos.set("001", "Maria");
alunos.set("002", "João");
alunos.set("003", "Pedro");

console.log(alunos.get("002")); // João

Também podemos verificar se uma chave existe:

console.log(alunos.has("001")); // true

Remover:

alunos.delete("003");