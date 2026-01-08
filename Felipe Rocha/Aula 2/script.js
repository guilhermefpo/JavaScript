/*
===============================
📘 LISTAS (ARRAYS) EM JAVASCRIPT
===============================

🔹 O que é uma lista (array)?
--------------------------------
- Uma lista armazena vários valores dentro de uma única variável.
- Pode conter diferentes tipos de dados (string, number, boolean, etc).
- Os índices sempre começam em 0.

Exemplo:
const names = ["Felipe", "João", "Julia", 10, false]


🔹 Acessando itens da lista
--------------------------------
- Para acessar um item, usamos o índice.

Exemplo:
const joao = names[1] // "João"


🔹 Adicionar itens na lista
--------------------------------

names.push("Pedro")
- Adiciona um item NO FINAL da lista.

names.unshift("Fernanda")
- Adiciona um item NO INÍCIO da lista.


🔹 Remover itens da lista
--------------------------------

names.shift()
- Remove o PRIMEIRO item da lista.
- Não recebe parâmetros (o 10 era desnecessário).

names.pop()
- Remove o ÚLTIMO item da lista.


🔹 Alterar um item da lista
--------------------------------
- Podemos alterar um valor usando o índice.

Exemplo:
names[1] = "Elias"


🔹 Procurar um item na lista
--------------------------------
names.indexOf("Elias")
- Retorna o índice do item.
- Se não encontrar, retorna -1.


🔹 Ordenar lista
--------------------------------
const sortedNames = names.sort()
- Ordena os itens em ordem alfabética.
- Modifica a lista original.


🔹 Tamanho da lista
--------------------------------
names.length
- Retorna quantos itens existem na lista.
- Em strings, retorna o número de caracteres.

===============================
📌 EXEMPLO FINAL
===============================

const names = ["Felipe", "João", "Julia", 10, false]

names.shift()
names.unshift(20)
names.unshift("Fernanda")
names.pop()
names.pop()
names[1] = "Elias"

console.log(names)
console.log(names.indexOf("Elias"))
console.log(names.length)
console.log(names.sort())

===============================
📌 
===============================
*/



