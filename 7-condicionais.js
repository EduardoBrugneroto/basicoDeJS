console.log (`trabalhando com condicionais`);

//criando uma lista
const listaDeDestinos = new Array (
    `Salvador`, 
    `São Paulo`,
    `Rio De Janeiro`
);


const idadeComprador = 10;
const estaAcompanhado = false;
const temPassagemComprada = true;
listaDeDestinos.push (`Curitiba`); 
console.log (listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhado){
    console.log("Comprou a viagem");
    listaDeDestinos.splice(2,1);
}else{
    console.log("O Comprador é menor de idade e não esta acompanhado , não posso vender a passagem")
}

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!!");
}else {
    console.log("Você não pode embarcar");
}





console.log(listaDeDestinos);



//tipos de operadores existentes 
// > (maior)
// < (menor)
// <= (menor ou igual)
// >= (maior ou igual)
// == (igual)
