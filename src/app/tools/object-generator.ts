import { MapObject } from '../models/types/mapped-object.types';

export class GenerateObject {
    constructor() {

    }

    clone(obj) {
        if (null == obj || 'object' !== typeof obj) { return obj; }
        let copy = obj.constructor();
        for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) { copy[attr] = obj[attr]; }
        }
        return copy;
    }

    // -- single path object
    generatePath(obj: Object, path: String, value?: any) {
        value = value ? value : null;
        const keyPath = path.split('.');
        const lastKeyIndex = keyPath.length - 1;
        for (let i = 0; i < lastKeyIndex; ++i) {
            const key = keyPath[i];
            if (!(key in obj)) {
                obj[key] = {};
            }
            obj = obj[key];
        }
        obj[keyPath[lastKeyIndex]] = value;
    }

    // -- generate full object
    generateObject(obj: Object, pathArray: Array<MapObject>) {
        pathArray.forEach(map => {
            this.generatePath(obj, map.path, map.value);
        });
    }
}
