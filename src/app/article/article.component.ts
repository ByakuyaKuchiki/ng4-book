import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding(attr.class) cssClass= "row";

  votes: number;
  title: string;
  link: string;

  constructor() { }

  ngOnInit() {
    this.votes = 10;
    this.title = "Angular 2";
    this.link = "http://angular.io";

  }

  voteUp():boolean{
    this.votes += 1;
    return false;
  }

  voteDown():boolean {
    this.votes -= 1;
    return false;
  }

}
