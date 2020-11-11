export {};

enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}

// Superclase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() {
        return this._id;
    }
    // set id(id:number) {
    //     this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}



// get y set

class Picture extends Item {
    static photoOrientation = PhotoOrientation; // implícitamente el acceso es public
    // Propiedades
   
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        super(id, title);
        this._orientation = orientation;
    }

    get orientation() {
        return this._orientation;
    }
    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id},
        title: ${this.title},
        orientation: ${this.orientation}]`
    }
}

class Album extends Item {
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title);
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

// Accediendo a los miembros públicos // AHORA PRIVATE (#)
console.log(picture.id); // get id()

// picture.id = 100; // private, set id(100)
picture.title = 'rtrtrtrt'; // private
album.title = 'wewewewe'; // private
console.log(album);

// const item = new Item(1,'fffff');
// console.log(item);

// Probamos el miembro estático de Picture
console.log(Picture.photoOrientation.Lanscape);
