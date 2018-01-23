
export class PriceService {

  constructor() { }

  calculTotalPrice(basePrice: number, state: string){
    const tax = Math.random();
    return basePrice + tax;
  }
}
