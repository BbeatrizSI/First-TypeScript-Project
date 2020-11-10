"use strict";
console.log('Hola hey PLatzi world!');
// Number
// Tipado Explícito
var phone;
phone = 1;
phone = 54234567;
// phone = 'Hola'; // Error
// Inferido
var phoneNumber = 650199270;
// phoneNumber = true; // Error
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Boolean
// Tipado Explícito
var isPro;
isPro = false;
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error
// String
// Tipado Explícito
var userName = 'barbara';
userName = 'lara';
// userName = true; // Error
// Template String
// Uso back-tick `
var userInfo;
userInfo = "\n    User info:\n    username: " + userName + "\n    firstName: " + (userName + ' sacristan') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n    ";
console.log('userInfo', userInfo);
