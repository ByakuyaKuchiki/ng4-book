import { MockPriceService } from "../services/interfaces/price-service.interface.mock";
import { Product } from "./product.model";


describe('Product', () => {
    let product;

    beforeEach(()=>{
        const service = new MockPriceService();
        product = new Product(service, 11.00);
    });

    describe('price', () => {
        it('is calculated based on the price and the state', () => {
            expect(product.totalPrice('FL')).toBe(11.66);
        });
    });
});