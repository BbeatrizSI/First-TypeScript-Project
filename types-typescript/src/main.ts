console.log('Hola hey PLatzi world!');


// Number
// Tipado Explícito
let phone: number;
phone = 1;
phone = 54234567;
// phone = 'Hola'; // Error

// Inferido
let phoneNumber = 650199270;
// phoneNumber = true; // Error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


// Boolean
// Tipado Explícito
let isPro: boolean;
isPro = false;

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error


// String
// Tipado Explícito
let userName: string = 'barbara';
userName = 'lara';
// userName = true; // Error

// Template String
// Uso back-tick `
let userInfo: string;
userInfo = `
    User info:
    username: ${userName}
    firstName: ${userName + ' sacristan'}
    phone: ${phone}
    isPro: ${isPro}
    `;

console.log('userInfo', userInfo);

