// Función para mostrar una fotografía
export{};
enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
console.log(`[title: ${picture.title}, 
date: ${picture.date},
orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'dfdsfsdfds',
    date: '2020',
    orientation: PhotoOrientation.Lanscape
}

showPicture(myPic);
showPicture({
    title: 'ytuytututy',
    date: '2222',
    orientation: PhotoOrientation.Portrait,
    // extra: 'prueba' // Error
});


interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'Default', date: '2020'};
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date;
    }
    return pic;
}

let picture = generatePicture({});
console.log(picture);
picture = generatePicture({title: 'Travel'});
console.log(picture);

// INterface: Usuario

interface User {
    readonly id: number; // solo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 1, username: 'Bbbeatrizsi', isPro: true};
console.log(user);
user.username = 'Jajaja'
console.log(user);
