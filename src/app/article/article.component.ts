import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from "../modeles/article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass= "row";
  article: Article;

  constructor() { }

  ngOnInit() {

    this.article = new Article('Angular 2', 'https://angular.io', 10);

  }

  voteUp():boolean{
    this.article.voteUp();
    return false;
  }

  voteDown():boolean {
    this.article.voteDown();
    return false;
  }

}
