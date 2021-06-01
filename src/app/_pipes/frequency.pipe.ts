import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frequency'
})
export class FrequencyPipe implements PipeTransform {
  transform(value: number): any {
    if (value <= 1) {
      return 'Daily';
    } 
    if (value <= 7) {
      return 'Weekly';
    } 
    if (value <= 30) {
      return 'Monthly';
    } 
    if (value <= 365) {
      return 'Annually';
    } 
    
    else return value;
  }
}