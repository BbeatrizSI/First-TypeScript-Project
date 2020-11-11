import {Item} from './item';
import {PhotoOrientation} from './photo-orientation';


export class Picture extends Item {
    constructor(id: number, title: string, private _orientation: PhotoOrientation) {
        super(id, title);
   }

    toString() {
        return `[id: ${this._id},
        title: ${this._title},
        orientation: ${this._orientation}]`
    }
}