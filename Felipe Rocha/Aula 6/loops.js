// =========================
// LOOPS (Laços de repetição)
// =========================

// ---------- FOR ----------
// Usado quando sabemos quantas vezes o loop vai rodar

for (let index = 1; index <= 20; index++) {
  // console.log(index);
}

// index++ é o mesmo que:
// index += 1
// index = index + 1



// ---------- FOR com Arrays ----------

const cars = ['Ferrari', 'Tesla', 'Mercedes'];

// Loop tradicional usando índice
for (let i = 0; i < cars.length; i++) {
  // console.log(cars[i]);
}

// ---------- FOR...OF ----------
// Usado para percorrer os valores de um array
for (let car of cars) {
  // console.log(car);
  // car++ ❌ Não faz sentido aqui, pois "car" é uma string
}



// ---------- forEach ----------
// Método próprio de arrays
// Recebe uma função com (item, índice)

cars.forEach(function (car, index) {
  // console.log(index);
  // console.log(car);
});



// ---------- WHILE ----------
// Executa enquanto a condição for verdadeira
// Importante atualizar a variável para evitar loop infinito

let index = 0;
while (index <= 20) {
  // console.log('Index é menor ou igual a 20!');
  index++;
}



// ---------- FOR...IN ----------
// Usado para percorrer propriedades de objetos

const person = {
  name: 'Jane',
  age: 21,
};

for (let property in person) {
  console.log(person[property]);
}


/*
for → quando sabemos o número de repetições

for tradicional com array → controle total do índice

for...of → percorre valores de arrays

forEach → método moderno e simples para arrays

while → executa enquanto a condição for verdadeira

for...in → percorre propriedades de objetos

*/