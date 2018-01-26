import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeFormat'
})
export class RouteFormatPipe implements PipeTransform {

  transform(value: string, parent: string): string {
    if (!parent && value === '') {
      return '';
    } else if (!parent || parent === '' || parent === '/') {
      return value;
    } else {
      return parent + '/' + value;
    }
  }

}
