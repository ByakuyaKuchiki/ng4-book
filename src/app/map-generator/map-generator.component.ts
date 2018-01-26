import { Component, Input } from '@angular/core';

import { Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-map-generator',
  templateUrl: './map-generator.component.html',
  styleUrls: ['./map-generator.component.css']
})
export class MapGeneratorComponent {

  @Input() routes: Routes;

  constructor() { }

  removeSpecialChar(text: string, replace: string): string {
    const pattern = '/';
    const reg = new RegExp(pattern, 'g');

    return text.replace(reg, replace);
  }

}
