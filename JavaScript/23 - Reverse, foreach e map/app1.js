const carros = ["corola", "Honda Civic", "Land Rover", "Fusca"];

//reverse inverte a posição do array
console.log(carros);
carros.reverse();
console.log(carros, "Carros após o reverse");

//forEach percorre todos os elementos do array
carros.forEach((item, index) => console.log(item, index));

//MAP percorre e retorna um novo array

const outrosCarros = carros.map((carro) => carro);

console.log(outrosCarros, "outrosCarros");