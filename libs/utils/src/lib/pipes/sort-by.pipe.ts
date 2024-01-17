import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByRating',
})
export class SortByRating implements PipeTransform {
  transform(array: Array<any>, field: number): any[] {
    if (!Array.isArray(array)) {
      return;
    }

    return array.sort((a: any, b: any) => {
      if (!field) return a.rating - b.rating;
      return b.rating - a.rating;
    });
  }
}
