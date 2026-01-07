let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)

for (let pos = 0; pos < num.length ; pos++) {
    console.log(num[pos])
}


    
for (let valor of num) {
    console.log(valor)
}
