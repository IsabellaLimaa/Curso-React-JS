/*let resultado;
const numero = 31;

if(numero >= 0 && numero < 9){
    resultado = "O numero é maior ou igual a 0 e menor que 9";
}else if(numero >= 9 && numero < 31){
    resultado = "O numero é maior ou igual a 9 e menor que 31";
}else{
    resultado = "O numero é maior ou igual 31";
}
console.log(resultado);*/


//12 - Estruturas condicionais

const media = (10 + 10 + 8 + 9) / 4;
let resultado;
console.log(`A media é: ${media}`);


if(media === 10){
    resultado = "Aluno aprovado com nota 10";
}else if(media >= 7 && media < 10){
    resultado = "Aluno aprovado com uma boa nota";
}else if(media >= 6 && media < 7){
    resultado = "Aluno ficou na média";
}else{
    resultado = "Aluno de recuperação";
}

console.log(resultado);

//COMBINAR INFORMAÇÕES E FUNCIONALIDADES

//ESTRUTURAS CONDICIONAIS / CONTROLE + OPERADORES LÓGICOS + COMPARAÇÃO