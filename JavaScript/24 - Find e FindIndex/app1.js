//Find E findIndex

const pessoas = [
    "Daniel",
    "Isabella",
    "Chico",
    "João",
    "Carla",
    "Maria",
  ];
  
  
  //Find percorre o Array para encontrar um elemnto específico
  const meuNomePosição = pessoas.find((item) => item === "Isabella");
  console.log(meuNomePosição);
  
  //findIndex encontra o indice desse elemento específico
  const meuNomePosiçãoIndex = pessoas.findIndex((item) => item === "Isabella");
  console.log(meuNomePosiçãoIndex);