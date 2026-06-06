console.log("Iniciando com JavaScript");

// variáveis
let steveRogers = "Capitão América";
var tonyStark = "Homem de Ferro";
console.log(`Super Herois da Marvel: ${steveRogers}, ${tonyStark}.`);

let pagamento = 1500.5;
var conta = 2356;
console.log(`Fazer pagamento de ${pagamento}. Na conta ${conta}. `);

// Dado do tipo de objeto
let idade = 80; // Number
let nome = "Steve Rogers"; // String
let capitao = { nome: "Steve Rogers", idade: 80 }; // Object
console.log(`Nome do personagem: ${capitao.nome}, idade: ${capitao["idade"]}`);

// Funções
function calcularPotencia(base, expoente) {
  return base ** expoente;
}

let resultado = calcularPotencia(2, 3);
console.log(`Resultado: ${resultado}`);

// Função são objetos
let calcularSoma = new Function("numero1, numero2", "return numero1 + numero2");

let valor = calcularSoma(2, 3);
console.log(`Resultado: ${valor}`);

// Métodos

const personagem = {
  apelido: "Capitão América",
  nome: "Steve Rogers",
  habilidade: "Força e velocidade",
  descricao: function () {
    return `Nome: ${this.nome}, Apelido: ${this.apelido}, Poderes: ${this.habilidade}`;
  },
};

console.log(personagem.descricao());

// Arrow Function

multiplicar = (valor1, valor2) => {
  return valor1 * valor2;
};

console.log(`Valor da multiplicação: ${multiplicar(2, 5)}`);

multiplicacao = (n1, n2) => n1 * n2;
console.log(`Resulttado da multiplicação: ${multiplicacao(9, 2)}`);
