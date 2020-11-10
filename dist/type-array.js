"use strict";
// Corchetes
// Tipo explícito
var users;
users = ['bbeatriz', 'asdasd', 'asdsadadew'];
// users = [1,true,null] // Error!
// Tipo inferido
var otherUsers = ['bbeatriz', 'asdasd', 'asdsadadew'];
// otherUsers = [1,true,null]; // Error!
// Array<TIPO>
var pictureTitle;
pictureTitle = ['adasd', 'etertert'];
// Accediendo a los valores en un array
console.log(users[0]);
console.log(pictureTitle[0]);
// Propiedades en el array
console.log(users.length);
// uso de metodos en arrays
users.push('asdasddas');
users.sort();
console.log(users);
