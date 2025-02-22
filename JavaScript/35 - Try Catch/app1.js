//Try Catch retorna um erro de forma menos crua pro usuário

async function loadData() {
  load = true;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/userss");
    const data = await response.json();
  
  for (const item of data) {
    console.log(item.name);
    }
  }catch(error){
    console.log(error.message);
    console.log("O programa falhou, contrate o administrador...");
  }finally { //é executado independente do resultado 
    console.log("O finally executou...");
    load = false; //independente do que acontecer vai finalizar o load
  }
}

loadData();