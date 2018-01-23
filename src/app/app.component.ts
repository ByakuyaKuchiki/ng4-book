import { 
  Component, 
  OnInit, 
  AfterViewInit, 
  EventEmitter
   } from '@angular/core';
import { Article } from "./modeles/article.model";
import { Product } from "./modeles/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'tutorial app';
  articles: Article[];

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };

  products: Product[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];

    this.products = [ new Product(
       'MYSHOES',
       'Black Running Shoes',
       '/assets/images/products/black-shoes.jpg',
       ['Men', 'Shoes', 'Running Shoes'],
       109.99),
       new Product(
       'NEATOJACKET',
       'Blue Jacket',
       '/assets/images/products/blue-jacket.jpg',
       ['Women', 'Apparel', 'Jackets & Vests'],
       238.99),
       new Product(
       'NICEHAT',
       'A Nice Black Hat',
       '/assets/images/products/black-hat.jpg',
       ['Men', 'Accessories', 'Hats'],
       29.99)
    ]
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $('.clash-card__image img').hide();
    $('.slick-active').find('.clash-card img').fadeIn(200);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`adding new article: ${title.value}, link ---> ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';

    return false;
  }

  beforeChange(e) {
    $('.slick-active').find('.clash-card img').fadeOut(1000);
  }

  afterChange(e) {
    $('.slick-active').find('.clash-card img').fadeIn(200);
  }

  sortArticle():Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  productWasSelected(product: Product): void{
    console.log('the product: ', product);
  }


}
