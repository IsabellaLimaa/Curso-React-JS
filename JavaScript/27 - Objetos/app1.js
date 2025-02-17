//Objetos

const carro = {
    nome: "Corolla",
    cor: "preto",
    fabricação: 2020,
    "size-car": "4 Metros",
    "air-bag": true,
  };
  
  //ACESSAR PROPRIEDADES DE UM OBJETO
  console.log(carro.nome);
  console.log(carro["size-car"]);
  
  console.log("======================");
  
  //MODIFICAR VALOR DE UMA PROPRIEDADE
  carro.nome = "Honda Civic";
  console.log(carro.nome);
  
  console.log("======================");
  
  //CRIAR UMA NOVA PROPRIEDADE
  console.log(carro.idade);
  carro.idade = 3;
  console.log(carro.idade);
  
  console.log("======================");
  
  //DELETAR
  delete carro.idade;
  console.log(carro.idade);
  
  console.log("======================");
  
  //VERIFICAR SE ELEMENTO EXISTE
  
  if("nome" in carro){
    console.log("Nome existe em carro");
  }else{
    console.log("Nome não existe em carro");
  }