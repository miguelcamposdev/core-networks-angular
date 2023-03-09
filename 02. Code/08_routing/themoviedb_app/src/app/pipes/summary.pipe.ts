import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.length >= 100 ? value.substring(0, 100) + '...' : value;
  }
}
