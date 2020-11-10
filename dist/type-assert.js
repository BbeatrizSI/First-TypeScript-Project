"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle bracket syntax
var username;
username = 'sada';
// tenemos una cadena TS confía en mi!
var message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
console.log(message);
var userNameWithId = 'sadsad 5';
// Como obtener el username
username = userNameWithId.substring(0, 6);
console.log(username);
// Suntaxis "as"
message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
var helloUser;
helloUser = 'hello asdasdsd';
username = helloUser.substring(6);
console.log(username);
