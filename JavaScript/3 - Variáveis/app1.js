//variáveis em Javascript: são maneiras de amarzenarmos informações para usarmos posteriormente

VAR
//VAR: Maneira antiga
//permite que add um valor nele e depois poder alterar esse valor. 

//var pode ser reutilizado depois de ser declarado, já o const e let precisa declarar no começo do cod.

/*var nome = "Isabella";
console.log(Meu nome é ${nome});*/

/*console.log(Meu nome é ${nome}); //resultado vai ser null pois a variável foi declarada embaixo, mas pode usar assim.
var nome = "Isabella"; */


LET
//LET: Adiciona um valor e também pode alterar.

/*console.log(`Meu nome é ${nomeLet}`); //resultado vai ser indefinido pois a variável foi declarada embaixo.
var nomeLet = "Isabella";*/

/*let nomeLet = "Isabella"; //pode trocar o valor mas não pode ser redeclarado
nomeLet = "Chico";
console.log(Meu nome é ${nomeLet});*/

let sobrenome;
sobrenome = "de Lima";
console.log(`O sobrenome é: ${sobrenome}`);


CONST
//CONST: Adiciona um valor e não pode mais substituir.

//no const não pode trocar de valor, nem redeclarar e nem usar o console.log para chamar a variável antes de ela ser declarada.