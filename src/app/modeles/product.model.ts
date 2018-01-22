export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public departement: string[],
        public price: number
    ) {
        
    }
}