console.log (`trabalhando com condicionais`);

//criando uma lista
const listaDeDestinos = new Array (
    `Salvador`, 
    `São Paulo`,
    `Rio De Janeiro`
);


const idadeComprador = 15;
listaDeDestinos.push (`Curitiba`); 
console.log (listaDeDestinos);

if (idadeComprador >= 18){
    console.log("Comprou a viagem de São Paulo");
    listaDeDestinos.splice(1,1);
}else{
    console.log("O Comprador é menor de idade, não posso vender a passagem")
}




console.log(listaDeDestinos);



//tipos de operadores existentes 
// > (maior)
// < (menor)
// <= (menor ou igual)
// >= (maior ou igual)
// == (igual)
