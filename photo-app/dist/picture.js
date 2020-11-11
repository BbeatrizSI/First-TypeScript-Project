import { Item } from './item';
export class Picture extends Item {
    constructor(id, title, _orientation) {
        super(id, title);
        this._orientation = _orientation;
    }
    toString() {
        return `[id: ${this._id},
        title: ${this._title},
        orientation: ${this._orientation}]`;
    }
}
