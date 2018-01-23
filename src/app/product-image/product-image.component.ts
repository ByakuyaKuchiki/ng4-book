import { Component,
  Input,
  HostBinding } from '@angular/core';
import { Product } from '../modeles/product.model';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {

  @Input() product: Product;

  @HostBinding('attr.class') cssClass = 'ui image small';
  
  constructor() { }

  ngOnInit() {
  }

}
