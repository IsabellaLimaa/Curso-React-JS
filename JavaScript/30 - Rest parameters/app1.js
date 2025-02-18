/*function sum(n1, n2){
    return n1 + n2;
}

console.log(sum(1, 2));*/

function sum(...args){

    //esse for faz a soma dos elementos do array
   /* for (const number of args){
        total += number;
    }*/

    //usando reduce para somar os elementos do array
    const initialValue = 0;
    const total = args.reduce(
        (acumulator, currentValue) => acumulator + currentValue,
        initialValue
    );

    return total;

}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 