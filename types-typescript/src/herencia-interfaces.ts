export {};

enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    // copia los atributos de Entity
    description: string;
}

interface Picture extends Entity {
    orientation: PhotoOrientation
}

const album: Album = {
    id: 12,
    title: 'MeetUps',
    description: 'dsfsdfdffsdfdsfdsfsdf'
}

const picture: Picture = {
    id: 12,
    title: 'MeetUps',
    orientation: PhotoOrientation.Square
}

let newPicture: Picture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log(album);
console.log(newPicture);
console.log(picture);


