// Map, Filter, Reduce

const numbers = [1, 2, 3, 4, 5]

const numbersMultipliedByTwo = numbers.map(function(number) {
   return number * 2
})

// map transforma todos os itens e retorna um novo array do mesmo tamanho


const ages = [8, 13, 27, 30, 22, 40]

const evenAges = ages.filter(function(age) {
     return age % 2 === 0
})

// filter retorna um novo array apenas com os itens que passam na condição


const sumOfAges = ages.reduce(function(accumulator, age) {
     return accumulator + age
}, 0)

// reduce transforma o array em um único valor

console.log(sumOfAges)
