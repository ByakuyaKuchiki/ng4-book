export class CustomMath {
    constructor() {
    }

    getRand(end: number, start?: number) {
        start = start || 0;
        return Math.floor(Math.random() * end) + start;
    }

}

