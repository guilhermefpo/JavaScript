/* ==========================================================
   CONDICIONAIS EM JAVASCRIPT
   Do básico ao avançado (nível sênior explicado simples)
   ========================================================== */

/* ----------------------------------------------------------
   IF
   Executa um bloco de código SE a condição for verdadeira
   ---------------------------------------------------------- */

const sum = 1 + 1;

if (sum === 2) {
    console.log("Sum is 2!");
}

/* ----------------------------------------------------------
   IF / ELSE
   Executa um bloco se for verdadeiro, outro se for falso
   ---------------------------------------------------------- */

const sumAlt = 1 + 2;

if (sumAlt === 2) {
    console.log("Sum is 2!");
} else {
    console.log("Sum is not 2!");
}

/* ----------------------------------------------------------
   DIFERENÇA ENTRE == E ===  (CONCEITO SÊNIOR IMPORTANTE)
   ----------------------------------------------------------
   ==  → compara APENAS o valor (faz coerção de tipo)
   === → compara valor E tipo (recomendado sempre)
   
   Exemplo:
   2 == "2"   → true
   2 === "2" → false
   ---------------------------------------------------------- */

const value = "2";

if (value === 2) {
    console.log("Same value and type");
} else {
    console.log("Different type");
}

/* ----------------------------------------------------------
   ELSE IF
   Permite testar múltiplas condições em sequência
   ---------------------------------------------------------- */

const total = 3;

if (total === 2) {
    console.log("Total is 2");
} else if (total === 3) {
    console.log("Total is 3");
} else {
    console.log("Total is neither 2 nor 3");
}

/* ----------------------------------------------------------
   OPERADORES LÓGICOS
   ----------------------------------------------------------
   && (AND / E) → todas as condições devem ser verdadeiras
   || (OR / OU) → pelo menos uma condição verdadeira
   !  (NOT / NÃO) → inverte o valor booleano
   ---------------------------------------------------------- */

const sum1 = 2 + 2; // 4
const sum2 = 3 + 3; // 6

if (sum1 === 4 && sum2 === 6) {
    console.log("Both conditions are true");
}

if (sum1 === 4 || sum2 === 10) {
    console.log("At least one condition is true");
}

const isLogged = false;

if (!isLogged) {
    console.log("User is not logged in");
}

/* ----------------------------------------------------------
   CONCEITO SÊNIOR: TRUTHY E FALSY
   ----------------------------------------------------------
   Em JavaScript, alguns valores são considerados false:
   false, 0, "", null, undefined, NaN
   Todo o resto é true
   ---------------------------------------------------------- */

const username = "";

if (!username) {
    console.log("Username is empty");
}

/* ----------------------------------------------------------
   OPERADOR TERNÁRIO
   ----------------------------------------------------------
   Forma curta do if/else
   Muito usado em código profissional
   ----------------------------------------------------------
   condição ? valorSeVerdadeiro : valorSeFalso
   ---------------------------------------------------------- */

const result = sum === 2 ? "Correct" : "Incorrect";
console.log(result);

/* ----------------------------------------------------------
   BOA PRÁTICA SÊNIOR:
   Use ternário apenas para lógica simples
   ---------------------------------------------------------- */

/* ----------------------------------------------------------
   SWITCH
   ----------------------------------------------------------
   Usado quando há muitos valores possíveis para a mesma
   variável (mais legível que vários else if)
   ---------------------------------------------------------- */

const car = "Tesla";

switch (car) {
    case "Mercedes":
        console.log("Mercedes is beautiful");
        break;
    case "Ferrari":
        console.log("Ferrari is red");
        break;
    case "Tesla":
        console.log("Tesla is very smart!");
        break;
    default:
        console.log("Unknown car");
}

/* ----------------------------------------------------------
   CONCEITO SÊNIOR: RETURN EARLY (EVITAR ELSE DESNECESSÁRIO)
   ---------------------------------------------------------- */

function checkNumber(number) {
    if (number > 10) {
        return "Greater than 10";
    }

    return "10 or less";
}

/* ----------------------------------------------------------
   CONCEITO SÊNIOR: LEGIBILIDADE > CÓDIGO CURTO
   ----------------------------------------------------------
   Código limpo, claro e previsível sempre vence
   ---------------------------------------------------------- */
