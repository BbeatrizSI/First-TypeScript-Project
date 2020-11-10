// Type object
let user: object;
user = {};

user = {
    id: 1,
    username: 'bbeatrizsi',
    firstName: 'Bárbara',
    isPro: true
}

console.log('user', user);
// Object vs object (clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'bbeatrizsi',
    firstName: 'Bárbara',
    isPro: true
};

const isInstance = myObj instanceof Object; // Clase Object de JS
console.log(isInstance);

console.log('username', myObj.username);

