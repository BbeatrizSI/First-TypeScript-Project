"use strict";
// Orientación para fotos
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Lanscape"] = 0] = "Lanscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Lanscape;
console.log(landscape);
console.log(PhotoOrientation[landscape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Lanscape"] = 10] = "Lanscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log(PictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Espana"] = "sp";
    Country["Mexico"] = "mx";
})(Country || (Country = {}));
var country = Country.Espana;
console.log(country);
