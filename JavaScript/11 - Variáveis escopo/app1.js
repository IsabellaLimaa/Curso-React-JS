//13 - Variáveis escopo

const media = 10

if(media > 9){
    //var resultado = "Aluno aprovado"; //o var funciona com escopo global, então ele consegue funcionar mesmo que o resultado esteja declarado fora do bloco de código.
     let resultado = "Aluno aprovado";
     const resultado = "Aluno aprovado"; //já o let e const não é global, então só funcionariam se o console.log(resultado) estivesse dentro desse bloco de código.
     
     //console.log(resultado); //exemplo do console.log(resultado) dentro do bloco de código
}

console.log(resultado);