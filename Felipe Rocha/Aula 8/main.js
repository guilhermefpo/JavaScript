/* ==========================================================
   FUNÇÕES E ARROW FUNCTIONS EM JAVASCRIPT
   Do básico ao avançado (nível sênior explicado simples)
   ========================================================== */

/* ----------------------------------------------------------
   O QUE É UMA FUNÇÃO?
   ----------------------------------------------------------
   Função é um bloco de código reutilizável que executa
   uma ação específica ou retorna um valor.
   ---------------------------------------------------------- */

/* ----------------------------------------------------------
   FUNÇÃO TRADICIONAL (FUNCTION DECLARATION)
   ---------------------------------------------------------- */

function sum(a, b) {
    console.log(a + b);
}

sum(2, 12);

/* ----------------------------------------------------------
   FUNÇÃO COM RETURN
   ----------------------------------------------------------
   return:
   - encerra a função
   - devolve um valor para quem chamou a função
   ---------------------------------------------------------- */

function sumWithReturn(a, b) {
    return a + b;
}

const sumResult = sumWithReturn(4, 2);
console.log(sumResult);

/* ----------------------------------------------------------
   PARÂMETROS PADRÃO (DEFAULT PARAMETERS)
   ----------------------------------------------------------
   Se um parâmetro não for passado, ele assume um valor padrão.
   Evita retornos undefined ou NaN.
   ---------------------------------------------------------- */

function sumWithDefault(a = 0, b = 0) {
    return a + b;
}

console.log(sumWithDefault(5)); // 5
console.log(sumWithDefault());  // 0

/* ----------------------------------------------------------
   CONCEITO SÊNIOR: DIFERENÇA ENTRE PARÂMETRO E ARGUMENTO
   ----------------------------------------------------------
   Parâmetro → variável declarada na função (a, b)
   Argumento → valor passado na chamada (2, 5)
   ---------------------------------------------------------- */

/* ----------------------------------------------------------
   ARROW FUNCTION (=>)
   ----------------------------------------------------------
   Forma moderna e mais curta de escrever funções.
   Muito usada em código profissional.
   ---------------------------------------------------------- */

const sumArrow = (a = 0, b = 0) => {
    return a + b;
};

const arrowResult = sumArrow(2);
console.log(arrowResult);

/* ----------------------------------------------------------
   ARROW FUNCTION COM RETURN IMPLÍCITO
   ----------------------------------------------------------
   Quando a função tem apenas UMA expressão,
   o return pode ser omitido.
   ---------------------------------------------------------- */

const sumArrowShort = (a = 0, b = 0) => a + b;

console.log(sumArrowShort(3, 7));

/* ----------------------------------------------------------
   CONCEITO SÊNIOR IMPORTANTE:
   ARROW FUNCTION vs FUNCTION TRADICIONAL
   ----------------------------------------------------------
   - Arrow functions NÃO possuem seu próprio "this"
   - Arrow functions NÃO possuem "arguments"
   - Function tradicional possui ambos
   ---------------------------------------------------------- */

/* ----------------------------------------------------------
   EXEMPLO PRÁTICO DO "this"
   ---------------------------------------------------------- */

const user = {
    name: "Carlos",
    sayNameTraditional: function () {
        console.log(this.name);
    },
    sayNameArrow: () => {
        // this aqui NÃO aponta para o objeto
        console.log(this.name);
    }
};

user.sayNameTraditional(); // Carlos
user.sayNameArrow();       // undefined

/* ----------------------------------------------------------
   BOA PRÁTICA SÊNIOR:
   ----------------------------------------------------------
   - Use function tradicional quando precisar de "this"
   - Use arrow function para callbacks e funções simples
   ---------------------------------------------------------- */

/* ----------------------------------------------------------
   FUNÇÕES COMO CIDADÃOS DE PRIMEIRA CLASSE
   ----------------------------------------------------------
   Funções podem:
   - Ser armazenadas em variáveis
   - Ser passadas como argumento
   - Ser retornadas por outras funções
   ---------------------------------------------------------- */

function execute(fn) {
    return fn();
}

execute(() => console.log("Function executed"));

/* ----------------------------------------------------------
   CONCEITO SÊNIOR: FUNÇÕES PURAS
   ----------------------------------------------------------
   - Não alteram dados externos
   - Sempre retornam o mesmo resultado
   - Facilitam testes e manutenção
   ---------------------------------------------------------- */

function pureSum(a, b) {
    return a + b;
}

/* ----------------------------------------------------------
   CONCEITO SÊNIOR: LEGIBILIDADE > CÓDIGO CURTO
   ----------------------------------------------------------
   Código claro, previsível e bem nomeado
   sempre vence otimizações prematuras.
   ---------------------------------------------------------- */
