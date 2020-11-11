// import {User, Album, Picture, PhotoOrientation} from './photo-app';
import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";
const user = new User(2, 'wewe', 'gfgfgf', true);
const album = new Album(12, 'weffwe');
const picture = new Picture(12, 'weffwe', PhotoOrientation.Lanscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log(user);
// Eliminar un Album
user.removeAlbum(album);
console.log(user);
