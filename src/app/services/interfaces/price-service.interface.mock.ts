import { IPriceService } from './price-service.interface';

export class MockPriceService implements IPriceService {
    calculateTotalPrice(basePrice: number, state: string) {
        if (state.match(/FL/i)) {
            return basePrice + 0.66;
        }
        return basePrice;
    }
}