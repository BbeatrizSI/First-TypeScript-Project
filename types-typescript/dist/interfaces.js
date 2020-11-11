"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Lanscape"] = 0] = "Lanscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ", \ndate: " + picture.date + ",\norientation: " + picture.orientation + "]");
}
var myPic = {
    title: 'dfdsfsdfds',
    date: '2020',
    orientation: PhotoOrientation.Lanscape
};
showPicture(myPic);
showPicture({
    title: 'ytuytututy',
    date: '2222',
    orientation: PhotoOrientation.Portrait,
});
function generatePicture(config) {
    var pic = { title: 'Default', date: '2020' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log(picture);
picture = generatePicture({ title: 'Travel' });
console.log(picture);
var user;
user = { id: 1, username: 'Bbbeatrizsi', isPro: true };
console.log(user);
user.username = 'Jajaja';
console.log(user);
