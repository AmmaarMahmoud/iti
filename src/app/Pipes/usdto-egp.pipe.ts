import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGP'
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value: any, num:number,): number {
    return value*num;
  }

}
