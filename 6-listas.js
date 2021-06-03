console.log (`trabalhando com listas`);

//criando uma lista
const listaDeDestinos = new Array (
    `Salvador`, 
    `São Paulo`,
    `Rio De Janeiro`
);

listaDeDestinos.push (`Curitiba`); //adicionar um item na lista 

console.log (listaDeDestinos);


listaDeDestinos.splice(1,1);//remover um item da lisa
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); //o "[]" serve para mostra algo específico na lista e o numero "1" e "0" mostra a posição do elemento na lista