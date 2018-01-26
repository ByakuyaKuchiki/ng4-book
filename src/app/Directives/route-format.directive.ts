import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appRouteFormat]'
})
export class RouteFormatDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(element.nativeElement, 'background', 'grey');
  }

}
