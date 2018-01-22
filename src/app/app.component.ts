import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Article } from "./modeles/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  articles: Article[];
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding new article: ${title.value} and link ${link.value}`);
    return false;
  }
  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  ngOnInit(){

  }

  ngAfterViewInit() {
    (function () {

      var slideContainer = $('.slide-container');

      slideContainer.slick();

      $('.clash-card__image img').hide();
      $('.slick-active').find('.clash-card img').fadeIn(200);

      // On before slide change
      slideContainer.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.slick-active').find('.clash-card img').fadeOut(1000);
      });

      // On after slide change
      slideContainer.on('afterChange', function (event, slick, currentSlide) {
        $('.slick-active').find('.clash-card img').fadeIn(200);
      });

    })();

  }
}
