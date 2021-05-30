import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + '(' + args[0] + ')';
  }

}
