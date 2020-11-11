// Orientación para fotos
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Lanscape,
    Portrait,
    Square,
    Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Lanscape;
console.log(landscape);
console.log(PhotoOrientation[landscape]);

enum PictureOrientation {
    Lanscape = 10,
    Portrait,
    Square,
    Panorama 
}
console.log(PictureOrientation.Portrait);


enum Country {
    Bolivia = 'bol',
    Espana = 'sp',
    Mexico = 'mx'
}
const country: Country = Country.Espana;
console.log(country);
