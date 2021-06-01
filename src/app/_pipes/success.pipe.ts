import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'success'
})
export class SuccessPipe implements PipeTransform {

  transform(value: number): any {
    return value + '%';
  }

}
