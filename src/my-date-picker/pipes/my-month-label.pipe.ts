import { Pipe, PipeTransform } from '@angular/core';
import {LongLabelService} from '../services/my-date-picker.long-label.service';

@Pipe({
  name: 'myMonthLabel'
})
export class MyMonthLabelPipe implements PipeTransform {
  constructor(
    private longLabelService: LongLabelService) {
  }

  transform(month: number, locale: string): string {
    let lang = (locale !== undefined) ? locale : 'en';
    let longLabels = this.longLabelService.getLongLabels(lang);

    return longLabels['monthLabels'][month];
  }
}
