console.log(`Trabalhando com listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1); //removendo item
console.log(listaDeDestinos);