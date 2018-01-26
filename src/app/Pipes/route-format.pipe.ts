import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeFormat'
})
export class RouteFormatPipe implements PipeTransform {

  transform(value: string, parent: string): string {
    return parent + '/' + value;
  }

}
