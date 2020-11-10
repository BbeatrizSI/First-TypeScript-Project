// Tanto null como undefined se pueden considerar como subtipos de ANY

// Explícita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // Error!

let otherVariable = null;
otherVariable = 'test';

console.log('null', nullVariable );
console.log('other', otherVariable );


// Undefined
let undefinedVar: undefined = undefined;
// undefinedVar = 'test'; // Error

let otherUndefinedVar = undefined;
otherUndefinedVar = 1;

console.log('und', undefinedVar );
console.log('other', otherUndefinedVar );

// Null y Undefined como subtipos

// --strictNullCheks
let albumName: string;
// albumName = null;
// albumName = undefined;