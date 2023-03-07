import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgshow',
})
export class ImgshowPipe implements PipeTransform {
  transform(value: string): string {
    return `<img width="200px" src="${value}" />`;
  }
}
