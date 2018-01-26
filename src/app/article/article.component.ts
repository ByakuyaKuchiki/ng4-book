import { Component, OnInit, HostBinding, Input, AfterViewInit } from '@angular/core';
import { Article } from '../models/article.model';
import { CustomMath } from '../tools/maths';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  themes: string[];
  currentTheme: string;
  maths: CustomMath;

  constructor() {
    this.themes = ['archer', 'barbarian', 'giant', 'goblin', 'wizard'];
    this.maths = new CustomMath();
   }

  ngOnInit() {
    this.article = this.article || new Article('Angular 2', 'http://angular.io', 3);
    const index = this.maths.getRand(this.themes.length);
    this.currentTheme = this.themes[index];
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
