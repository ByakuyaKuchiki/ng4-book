import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'product-departement',
  templateUrl: './product-departement.component.html',
  styleUrls: ['./product-departement.component.css']
})
export class ProductDepartementComponent {

  @Input() product: Product;

  constructor() { }

}
