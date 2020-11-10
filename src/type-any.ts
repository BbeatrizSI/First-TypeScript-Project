// any sería equivalente a "var" y su uso no es recomendable

// Tipo explícito
let idUser: any;
idUser = 1;
idUser = '1';
idUser = true;

console.log(idUser);

// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
otherId = true;

console.log(otherId);



let surprise: any = 'hello typescript';
const res = surprise.substring(6);

console.log(res);
