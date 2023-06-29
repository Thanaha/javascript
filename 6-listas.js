console.log(`Trabalhando com listas`);
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`) // adicionando um item na listem
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1);
console.log(listaDeDestinos);