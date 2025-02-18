const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeiraPosicao = numbers[0];
const segundaPosicao = numbers[1];
const terceiraPosicao = numbers[2];
const quartaPosicao = numbers[3];

//desestruturação de arrays (desestrutura baseado na posição do elemento)
console.log(primeiraPosicao, segundaPosicao, terceiraPosicao, quartaPosicao);

//MESCLANDO DESESTRUTURAÇÃO COM REST PARAMETERS
const [primeira, segunda, terceira, ...resto] = numbers;
console.log(primeira, segunda, terceira, resto);

//DESESTRUTURAÇÃO DE OBJETOS (desestrutura baseado no nome da propriedade)
const person = {
    name: 'Lucas',
    age: 23,
    city: 'São Paulo'
};

//maneira padrão de pegar um elemento do objeto
const myName = person.name;

const {name, age, city} = person;

console.log(name, age, city);