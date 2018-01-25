import {
  Component,
  OnInit
   } from '@angular/core';

import { routes } from './routes/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'tutorial app';

  routesLocales = routes;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.routesLocales);
  }

  pathAnalyser(): void{
    // get nested keys
  }
}
