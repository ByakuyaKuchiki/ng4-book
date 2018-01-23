import { IPriceService } from "../services/interfaces/price-service.interface";
import { MockPriceService } from "../services/interfaces/price-service.interface.mock";

export class Product {

    priceService: IPriceService;
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public departement: string[],
        public price: number,
        service?: IPriceService
    ) {
        this.priceService = service || new MockPriceService() ;
    }

    totalPrice(state?: string){
        state = state || 'FL';
        return this.priceService.calculateTotalPrice(this.price, state);
    }
}