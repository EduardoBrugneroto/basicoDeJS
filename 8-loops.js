console.log (`\n trabalhando com condicionais`);

//criando uma lista
const listaDeDestinos = new Array (
    `Salvador`, 
    `São Paulo`,
    `Rio De Janeiro`
);


const idadeComprador = 18;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";
listaDeDestinos.push (`Curitiba`); 
console.log (listaDeDestinos);

const podeCompra = idadeComprador >= 18 || estaAcompanhado;

let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}


console.log("Destino Existe; ", destinoExiste);

if(podeCompra && destinoExiste){
    console.log ("Boa Viagem!");

}else{
    console.log("Desculpe tivemos um erro!");
}




