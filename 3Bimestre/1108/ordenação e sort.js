function bubbleSort(array) {
    let tamanho = array.length;

    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - 1 - i; j++) {

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] =
                [array[j + 1], array[j]];
            }
        }
    }

    return array;
}

console.log(bubbleSort([5, 3, 8, 1, 2]));

Resultado:

[1, 2, 3, 5, 8]

Complexidade média e de pior caso:

O(n²)

15. Selection Sort
O Selection Sort procura o menor elemento e coloca-o na posição correta.

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {

        let menor = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[menor]) {
                menor = j;
            }
        }

        [array[i], array[menor]] =
        [array[menor], array[i]];
    }

    return array;
}

console.log(selectionSort([64, 25, 12, 22, 11]));

Resultado:

[11, 12, 22, 25, 64]

Complexidade:

O(n²)

16. Insertion Sort
O Insertion Sort constrói a lista ordenada gradualmente, inserindo cada elemento na posição correta.

function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {

        let atual = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > atual) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = atual;
    }

    return array;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));

Resultado:

[1, 2, 3, 4, 5, 6]

É interessante para listas pequenas ou que já estejam quase ordenadas.

17. Merge Sort
O Merge Sort utiliza a estratégia de divisão e conquista.

Ele:

divide o array;
ordena as partes;
junta as partes ordenadamente.
function mergeSort(array) {

    if (array.length <= 1) {
        return array;
    }

    const meio = Math.floor(array.length / 2);

    const esquerda = mergeSort(array.slice(0, meio));
    const direita = mergeSort(array.slice(meio));

    return merge(esquerda, direita);
}

function merge(esquerda, direita) {

    const resultado = [];

    while (esquerda.length && direita.length) {

        if (esquerda[0] < direita[0]) {
            resultado.push(esquerda.shift());
        } else {
            resultado.push(direita.shift());
        }
    }

    return resultado.concat(esquerda, direita);
}

console.log(mergeSort([8, 3, 5, 1, 9, 2]));

Complexidade:

O(n log n)

18. Quick Sort
O Quick Sort escolhe um elemento chamado pivô e separa os elementos menores e maiores.

function quickSort(array) {

    if (array.length <= 1) {
        return array;
    }

    const pivo = array[array.length - 1];

    const menores = array.filter(x => x < pivo);
    const iguais = array.filter(x => x === pivo);
    const maiores = array.filter(x => x > pivo);

    return [
        ...quickSort(menores),
        ...iguais,
        ...quickSort(maiores)
    ];
}

console.log(quickSort([10, 7, 8, 9, 1, 5]));

Complexidade média:

O(n log n)

Pior caso:

O(n²)

19. Ordenação usando JavaScript
O próprio JavaScript possui o método sort().

let numeros = [10, 2, 30, 4];

numeros.sort((a, b) => a - b);

console.log(numeros);

Resultado:

[2, 4, 10, 30]

Para ordem decrescente:

numeros.sort((a, b) => b - a);

É importante passar uma função de comparação para números. Sem ela, os valores são tratados como strings em determinadas situações:

[10, 2, 30].sort();

20. Métodos de busca
A busca serve para encontrar um determinado elemento dentro de uma estrutura.

Busca linear
A busca linear verifica os elementos um por um.

function buscaLinear(array, valor) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === valor) {
            return i;
        }
    }

    return -1;
}

const numeros = [10, 20, 30, 40, 50];

console.log(buscaLinear(numeros, 30));