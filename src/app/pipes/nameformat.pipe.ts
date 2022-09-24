import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameformat'
})
export class NameformatPipe implements PipeTransform {

  transform(value: string): unknown {
    return '<> ' + value + ' <>';
  }
}
