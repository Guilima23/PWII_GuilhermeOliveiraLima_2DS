let frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana



frutas.push("Uva");     // adiciona no final
frutas.pop();           // remove o último

frutas.unshift("Pera"); // adiciona no início
frutas.shift();         // remove o primeiro



for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}



frutas.forEach(fruta => {
    console.log(fruta);
});


let notas = [7, 8, 6, 10];

let soma = notas.reduce((total, nota) => total + nota, 0);

console.log(soma); // 31