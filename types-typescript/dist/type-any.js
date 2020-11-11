"use strict";
// any sería equivalente a "var" y su uso no es recomendable
// Tipo explícito
var idUser;
idUser = 1;
idUser = '1';
idUser = true;
console.log(idUser);
// Tipo inferido
var otherId;
otherId = 1;
otherId = '1';
otherId = true;
console.log(otherId);
var surprise = 'hello typescript';
var res = surprise.substring(6);
console.log(res);
