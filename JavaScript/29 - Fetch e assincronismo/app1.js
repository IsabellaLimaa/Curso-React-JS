let result = [];

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) //.then espera que a solicitação seja resolvida para trazer as informações no response.json
      .then((json) => { //outro .then para verificar se já foi resolvido e trazer o json
        result = json

        //o For só funciona dentro do fetch pois ele é assíncrono, se tentar fazer fora ele não vai esperar a resposta do fetch
        for (const item of result){
            console.log(item.name);
        }      
    });
