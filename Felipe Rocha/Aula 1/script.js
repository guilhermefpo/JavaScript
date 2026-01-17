/*
===============================
📘 A
===============================

🔹 var, let e const
--------------------------------
❌ var
- Forma antiga de declarar variáveis.
- Pode causar bugs por causa do escopo.
- NÃO é recomendado usar.

✅ let
- Usado quando o valor da variável PODE mudar.
- Possui escopo de bloco.

✅ const
- Usado quando o valor NÃO será reatribuído.
- Não podemos trocar o valor da variável,
  mas em arrays e objetos o conteúdo pode mudar.

Exemplo:
const lista = [1, 2, 3]
lista.push(4) // funciona
// lista = [1, 2] ❌ erro


🔹 Strings (Textos)
--------------------------------
const message = "Hello World!"

- .length → retorna o tamanho do texto
- .toUpperCase() → deixa tudo em MAIÚSCULO
- .toLowerCase() → deixa tudo em minúsculo
- Template String → usa crase `` para interpolar variáveis

Exemplo:
const firstName = "Guilherme"
const lastName = "Fernando"

console.log(`Meu nome é ${firstName} ${lastName}`)


🔹 Numbers (Números)
--------------------------------
const number = 5

- .toString() → converte número para texto
- typeof → mostra o tipo da variável

console.log(typeof number) // number


🔹 Booleanos
--------------------------------
- true → verdadeiro
- false → falso

Exemplo:
console.log(2 == 2) // true


🔹 Null e Undefined
--------------------------------
null
- Valor vazio intencional.
- A variável existe, mas está vazia.

undefined
- Variável declarada, mas sem valor atribuído.
- Normalmente o JS define automaticamente.

Exemplo:
const x = null
let y
console.log(y) // undefined


🔹 Arrays
--------------------------------
const list = [1, 2, 3, 4, 5]

- Armazena vários valores em uma única variável.
- Acessamos pelo índice (começa em 0).

Exemplo:
console.log(list[0]) // 1
console.log(list.length) // 5


🔹 Objects (Objetos)
--------------------------------
const object = {
  name: "Guilherme"
}

- Armazena dados em formato de chave e valor.

Exemplo:
console.log(object.name) // Guilherme

===============================

===============================
*/
