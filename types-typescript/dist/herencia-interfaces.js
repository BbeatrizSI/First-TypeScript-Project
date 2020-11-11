"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Lanscape"] = 0] = "Lanscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 12,
    title: 'MeetUps',
    description: 'dsfsdfdffsdfdsfdsfsdf'
};
var picture = {
    id: 12,
    title: 'MeetUps',
    orientation: PhotoOrientation.Square
};
var newPicture = {};
newPicture.id = 2;
newPicture.title = 'Moon';
console.log(album);
console.log(newPicture);
console.log(picture);
