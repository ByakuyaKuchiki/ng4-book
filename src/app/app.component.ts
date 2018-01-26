import {
  Component,
  OnInit
   } from '@angular/core';

import { routes } from './routes/app-routing.module';

import { ObjectAnalyze } from './tools/object-analyser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'tutorial app';

  routesLocales = routes;
  routesA: ObjectAnalyze;

  constructor() {
    this.routesA = new ObjectAnalyze(routes);
  }

  ngOnInit(): void {
    console.log(this.routesLocales);
    console.log(this.routesA.getAll());
  }

  pathAnalyser(): void {
    // get nested keys
  }
}
