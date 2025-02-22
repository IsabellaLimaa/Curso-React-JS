//SPREAD OPERATOR

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

//const array3 = array1.concat(array2);

//Operador Spread (...)

const array3 = [...array1, ...array2];

console.log(array3);

//Spread Operator Objetos

const person = {
  id: 1,
  name: "Daniel",
};

const personAddres = {
  city: "Presidente Prudente",
};

const completedPerson = {
  ...person,
  ...personAddres,
};

console.log(completedPerson)