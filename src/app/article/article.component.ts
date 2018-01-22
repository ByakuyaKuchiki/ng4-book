import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from "../modeles/article.model";
import { CustomMath } from "../tools/maths";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass= "row";
  @Input() article: Article;

  themes: string[];
  currentTheme: string;
  maths: CustomMath;

  constructor() {
    this.themes = ['archer', 'barbarian', 'giant', 'goblin', 'wizard'];
    this.maths = new CustomMath();
   }

  ngOnInit() {
    const index =this.maths.getRand(this.themes.length);
    this.currentTheme = this.themes[parseInt(index)];
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
