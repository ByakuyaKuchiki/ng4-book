import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Article } from "./modeles/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  articles: Article[];

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };

  beforechange

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
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


}
