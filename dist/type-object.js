"use strict";
// Type object
var user;
user = {};
user = {
    id: 1,
    username: 'bbeatrizsi',
    firstName: 'Bárbara',
    isPro: true
};
console.log('user', user);
// Object vs object (clase JS vs tipo TS)
var myObj = {
    id: 1,
    username: 'bbeatrizsi',
    firstName: 'Bárbara',
    isPro: true
};
var isInstance = myObj instanceof Object; // Clase Object de JS
console.log(isInstance);
console.log('username', myObj.username);
