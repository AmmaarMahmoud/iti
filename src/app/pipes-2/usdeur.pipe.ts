import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDEUR'
})
export class USDEURPipe implements PipeTransform {

  transform(value:any,URD:number):number {
    return value * URD;
  }

}
