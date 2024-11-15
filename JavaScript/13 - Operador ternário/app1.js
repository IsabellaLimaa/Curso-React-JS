//15 - Operador Ternário
const media = 4;
let resultado;

/*if(media >= 7){
  resultado = "Aprovado";
}else{
  resultado = "Reprovado";
}*/

//resultado = media >= 7 ? "Aprovado" : "Reprovado";
resultado = media >= 7 ? "Aprovado" : media = 6 ? "Recuperação" : "Reprovado"; //Exemplo de operador Ternário com else if

console.log(resultado);