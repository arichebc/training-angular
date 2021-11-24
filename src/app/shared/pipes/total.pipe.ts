import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(val: number, coef: number, tva?: number): number {
    console.log('pipe total instancied');
    if (tva) {
      return val * coef * (1 + tva / 100);
    }
    return val * coef;
  }
}
