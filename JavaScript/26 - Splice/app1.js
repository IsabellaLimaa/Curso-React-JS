//Splice
const pessoas = [
    "Daniel",
    "Isabella",
    "Chico",
    "João",
    "Carla",
    "Maria",
  ];
  
  console.log(pessoas, "antes do splice");
  //splice significa que vai remover 1 elemento apartir da posição 3
  pessoas.splice(3, 1);
  
  console.log(pessoas, "depois do splice");