//16 - Switch Case

const nome = "Chico";

/*if(nome === "Isabella"){
  console.log("O nome é Isabella");
}else if(nome === "Chico"){
  console.log("O nome é Chico");
}else{
  console.log("Nome desconhecido");
}*/

switch(nome){
  case "Isabella":
    console.log("O nome é Isabella");
    break;
    
    case "Chico":
      console.log("O nome é Chico");
      break;
      
      default:
      console.log("Nome desconhecido");
}