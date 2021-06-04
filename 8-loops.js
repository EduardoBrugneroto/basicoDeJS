console.log (`\n trabalhando com condicionais`);

//criando uma lista
const listaDeDestinos = new Array (
    `Salvador`, 
    `São Paulo`,
    `Rio De Janeiro`
);


const idadeComprador = 10;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Rio De Janeiro";
listaDeDestinos.push (`Curitiba`); 
console.log (listaDeDestinos);

const podeCompra = idadeComprador >= 18 || estaAcompanhado;

let contador = 0;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existe");
    }else {
        console.log("Destino não Existe");
    }
    contador += 1;
}


console.log(listaDeDestinos);

