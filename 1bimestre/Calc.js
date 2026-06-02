var n1 = document.querySelector('#num1');
var n2 = document.querySelector('#num2');
var resultado = document.querySelector('#resultado');

function somar() {
    resultado.innerHTML = Number(n1.value) + Number(n2.value);
}
function subtrair() {
    resultado.innerHTML = Number(n1.value) - Number(n2.value);
}
function multiplicar() {
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}
function dividir() {
    if (Number(n2.value)=== 0){
    resultado.innerHTML = 'Erro: Divisão por 0';
} else
resultado.innerHTML = Number(n1.value) / Number(n2.value);

}


