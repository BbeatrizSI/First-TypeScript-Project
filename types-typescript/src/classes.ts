export {};

enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id},
        title: ${this.title},
        orientation: ${this.orientation}]`
    }
}

class Album {
    public id: number;
    public title: string;
    public pictures: Picture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'sdsfser');
const picture: Picture = new Picture(1, 'dsfdf', PhotoOrientation.Square);
album.addPicture(picture);
console.log(album);

// Accediendo a los miembros públicos
picture.id = 100; // public
picture.title = 'rtrtrtrt'; // public
album.title = 'wewewewe';
console.log(album);
