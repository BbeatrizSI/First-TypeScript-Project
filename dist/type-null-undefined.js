"use strict";
// Tanto null como undefined se pueden considerar como subtipos de ANY
// Explícita
var nullVariable;
nullVariable = null;
// nullVariable = 1; // Error!
var otherVariable = null;
otherVariable = 'test';
console.log('null', nullVariable);
console.log('other', otherVariable);
// Undefined
var undefinedVar = undefined;
// undefinedVar = 'test'; // Error
var otherUndefinedVar = undefined;
otherUndefinedVar = 1;
console.log('und', undefinedVar);
console.log('other', otherUndefinedVar);
// Null y Undefined como subtipos
// --strictNullCheks
var albumName;
// albumName = null;
// albumName = undefined;
