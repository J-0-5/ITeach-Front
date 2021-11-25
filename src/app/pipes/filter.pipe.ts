import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], page: number = 0): any[] {
    if(!array) {return []}
    return array.slice(page, page + 5);
  }

}
