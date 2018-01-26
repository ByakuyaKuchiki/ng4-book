export interface MappedObject {
    original: Object;
    map: Array<MapObject>;
}

export interface MapObject {
    path: string;
    value: any;
}

