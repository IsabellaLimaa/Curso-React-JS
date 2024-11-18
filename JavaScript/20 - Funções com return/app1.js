function media(n1, n2, n3, n4){
    const soma = n1 + n2 + n3 + n4;

    return soma / 4;
}

if(media(10, 10, 3, 4) === 10){
    console.log("Parabéns, sua média final foi 10!");
}else if(media(10, 10, 3, 4) <= 5){
    console.log("Aluno de recuperação.");
}else{
    console.log("Aluno aprovado.");
}