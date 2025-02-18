//Função tradicional
console.log(sum(1, 2), "Antes da função ser definida");

function sum(n1, n2) {
    return n1 + n2;
}


//Arrow Function
const sumNumbers = (n1, n2) => {
    return n1 + n2;
};

console.log(sumNumbers(1, 2));//não tem como colocar antes de arrow function ser definida

//HOISTING = VAR E FUNCTION SÃO ELEVADOS PARA O TOPO DO CÓDIGO