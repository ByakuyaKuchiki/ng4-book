import { FormControl } from '@angular/forms';

export class Validation {
    constructor() {

    }

    skuValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value.match(/^123/)) {
            return { invalidName: true };
        }
    }
}
