import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPor'
})
export class MultiplicaPorPipe implements PipeTransform {

  transform(valor: number,multiplicaPor: number ): unknown {
    return valor * multiplicaPor;
  }

}
