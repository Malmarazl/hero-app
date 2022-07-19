import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../models/hero.interface';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: Hero[], page: number = 0): Hero[] {
      return value.slice(3*(page) , 3*(page+1));
  }

}
