export {};

// [1,'user']
let user: [number, string];
user = [1, 'bbeatrizsi']

console.log(user);
console.log(user[1]);
console.log(user[1].length);


// Tuplas con varios valores
let userInfo: [number, string, boolean];
userInfo = [2, 'asdas', true];
console.log(userInfo);

// Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'dasds']);
array.push([2, 'aererfffds']);
array.push([3, 'njnnnhyus']);


// Uso metodos de array con tuplas
array[2][1] = array[2][1].concat('001');
console.log(array);