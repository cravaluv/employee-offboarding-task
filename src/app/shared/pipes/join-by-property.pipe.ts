import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinByProperty'
})

export class JoinByPropertyPipe implements PipeTransform {
  transform(values: any[], property: string, separator = ', '): string {
    if (!Array.isArray(values)) {
      return values;
    }
    return values
      .map(item => item[property]).join(separator);
  }
}
