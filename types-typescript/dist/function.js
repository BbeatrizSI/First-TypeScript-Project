"use strict";
// crear una fotografía
// function createPicture(title, date, size) {
//     // title
// }
// // Usamos TS, definimos tipos para parámetros
// function createPicture(title: string, date: string, size: SquareSize) {
// //se crea la foto
// console.log(title, date, size);
// }
// createPicture('asdas', '2020', '100x100');
// createPicture('asdas', '2020');
// Parámetros opcionales en funciones
function createPicture(title, date, size) {
    //se crea la foto
    console.log(title, date, size);
}
createPicture('asdas', '2020');
createPicture('asdas');
createPicture();
// Flat array function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic('adedae', 'wedwedwede', '1000x1000');
console.log(picture);
// Tipo de retorno con TS
function handleError(code, message) {
    // Procesamiento del mensaje
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has occured';
    }
}
try {
    var result = handleError(200, 'OK'); // string
    console.log(result);
    result = handleError(404, 'error'); // never
    console.log(result);
}
catch (error) {
}
