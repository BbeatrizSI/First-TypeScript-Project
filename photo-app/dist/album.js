import { Item } from './item';
export class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.picture = [];
    }
    addPicture(picture) {
        this.picture.push(picture);
    }
}
