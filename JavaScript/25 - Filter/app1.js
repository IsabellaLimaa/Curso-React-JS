//Filter

const pessoas = [
    "Daniel",
    "Isabella",
    "Chico",
    "João",
    "Carla",
    "Maria",
  ];
  
  const filterPessoas = pessoas.filter((item) => item.length > 5);
  
  console.log(pessoas, "pessoas");
  console.log(filterPessoas, "filterPessoas");
  
  const apenasMeuNome = pessoas.filter((item) => item === "Isabella");
  console.log(apenasMeuNome, "apenasMeuNome");