export {};
// // 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = '10'

// // Buscar username dado un id
// function getUsernameById(id: number | string) {
//     // lógica
//     return 'bbeatrizsi';
// }

// getUsernameById(20);
// getUsernameById('20');

// Alis de tipos

type IdUser = number | string;
type Username = string;

let idUser: IdUser;
idUser = 10;
idUser = '10'

// Buscar username dado un id
function getUsernameById(id: IdUser): Username {
    // lógica
    return 'bbeatrizsi';
}

getUsernameById(20);
getUsernameById('20');


// Tipos literales
type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100';