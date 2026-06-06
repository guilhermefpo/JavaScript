// Função para sortear um índice aleatório
let sortear = (possibilidades) => {
  return Math.floor(Math.random() * possibilidades);
};

// Função para remover um elemento do array
let removerElemento = (array, elemento) => {
  let index = array.indexOf(elemento);
  if (index > -1) {
    array.splice(index, 1);
  }
};

// Função principal de sorteio
let sorteio = (numeros, quantidadeSorteio) => {
  let numerosSorteados = [];

  do {
    let indiceSorteado = sortear(numeros.length);
    let numeroSorteado = numeros[indiceSorteado];

    numerosSorteados.push(numeroSorteado);
    removerElemento(numeros, numeroSorteado);
  } while (numerosSorteados.length < quantidadeSorteio);

  return numerosSorteados;
};

// Exemplo de uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let resultado = sorteio(numeros, 3);
console.log(resultado);
