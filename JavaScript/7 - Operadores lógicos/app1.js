//8 - Operadores lógicos

//and lógico &&
//para que retorne em true as duas condições devem ser verdadeiras
//true && true = true
//false && false = false
//true && false = false
//false && true == false

console.log("AND LÓGICO &&");
console.log("true && true:", true && true);
console.log("true && false:", true && false);
console.log("10 >= 10 && 11 >= 11:", 10 >= 10 && 11 >= 11);

console.log("=============================");

//or lógico ||
//para que retorne em true uma das duas condições devem ser verdadeiras
//true && true = true
//false && false = false
//true && false = true
//false && true == true

console.log("OR LÓGICO ||");
console.log("true || true:", true || true);
console.log("true || false:", true || false);
console.log("10 >= 10 || 11 >= 11:", 10 >= 10 || 11 >= 11);

console.log("=============================");

//not lógico !

console.log("NOT LÓGICO !");
const usuarioAtivo = true;

console.log("usuarioAtivo", !usuarioAtivo); //o not lógico (!) inverte todos os resultados, então tudo que é true vira false.

console.log("10 >= 10 && 11 >= 11:", !(10 >= 10) && 11 >= 11);
console.log("10 >= 10:", 10 >= 10);
console.log("!10 >= 10:", !(10 >= 10));