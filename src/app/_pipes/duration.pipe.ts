import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): any {
    if (value <= 1) {
      return '1 Day';
    } 
    if (value <= 7) {
      return '1 Week';
    } 
    if (value <= 30) {
      return '1 Month';
    } 
    if (value <= 60) {
      return '2 Months';
    }
    if (value <= 90) {
      return '3 Months';
    }    
    if (value <= 180) {
      return '6 Months';
    }     
    if (value <= 360) {
      return '1 Year';
    } 

    else return value;
  }
}
