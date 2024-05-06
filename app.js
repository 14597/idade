let informacao = prompt ('informe sua idade! ');

if (informacao>=18){
alert (`Com : ${informacao} anos já pode tirar habilitação!`);
} else if(informacao<0){
    alert (`Com: ${informacao} anos já pode tirar habilitação!`);
} else{
    alert('Você ainda não pode tirar habilitação ');
}
