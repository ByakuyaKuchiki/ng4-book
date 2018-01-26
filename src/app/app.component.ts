import {
  Component
   } from '@angular/core';

import { routes } from './routes/app-routing.module';

import { ObjectAnalyze } from './tools/object-analyser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'tutorial app';

  routesLocales = routes;
  routesA: ObjectAnalyze;

  constructor() {
    this.routesA = new ObjectAnalyze(routes);
  }
}
