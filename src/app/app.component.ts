import { Component } from '@angular/core';
import { Article } from "./modeles/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles:Article[];
  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean{
    console.log(`Adding new article: ${title.value} and link ${link.value}`);
    return false;
  }
  constructor(){
    this.articles = [
       new Article('Angular 2', 'http://angular.io', 3),
       new Article('Fullstack', 'http://fullstack.io', 2),
       new Article('Angular Homepage', 'http://angular.io', 1),
       ];
  }
}
