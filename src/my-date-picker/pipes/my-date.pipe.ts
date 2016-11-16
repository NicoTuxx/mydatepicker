import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {
  transform(date: {year: number, month: number, day: number}, type: string): number {
    let value: number;
    console.log(date);
    switch (type) {
      case 'month':
        if (date.month === 0) {
          value = 12;
        } else if (date.month === 13) {
          value = 1;
        } else {
          value = date.month;
        }
        break;
      case 'year':
        if (date.month === 0) {
          value = date.year - 1;
        } else if (date.month === 13) {
          value = date.year + 1;
        } else {
          value = date.year;
        }
        break;
    }

    return value;
  }
}
