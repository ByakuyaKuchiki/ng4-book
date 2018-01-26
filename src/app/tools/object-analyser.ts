
import { MapObject, MappedObject } from '../models/types/mapped-object.types';
export class ObjectAnalyze {
    obj: Object;
    constructor(object: Object) {
        this.obj = object;
        // console.log(this.obj);
    }

    // -- verify type
    isObject(object): boolean {
        return Object.prototype.toString.call(object) === '[object Object]';
    }

    // -- generate mapping of the object
    getKeys(obj?: Object, prefix?: string): string[] {
        obj = obj ? obj : this.obj;
        const keys = Object.keys(obj);
        prefix = prefix ? prefix + '.' : '';
        return keys.reduce((result, key) => {
            if (this.isObject(obj[key])) {
                result = result.concat(this.getKeys(obj[key], prefix + key));
            } else {
                result.push(prefix + key);
            }
            return result;
        }, []);
    }

    valueByMap(object: object, path: string, prefix?: string): any {
        const val = null;
        let current = object;
        prefix = prefix ? prefix : '.';
        const pathArray = path.split(prefix);

        pathArray.forEach(elt => {
            current = current[elt];
        });

        return current;
    }

    getAll(): any[] {
        const result = [];
        this.getKeys().forEach(path => {
            let index: MapObject;
            index = {
                path: path,
                value: this.valueByMap(this.obj, path)
            };
            result.push(index);
        });
        return result;
    }

    generateMappedObject() {
        return {
            original: this.obj,
            map: this.getAll()
        };
    }
}
