import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paridad',
})
export class ParidadPipe implements PipeTransform {
  transform(value: number): string {
    return value % 2 == 0 ? 'PAR' : 'IMPAR';
  }
}
