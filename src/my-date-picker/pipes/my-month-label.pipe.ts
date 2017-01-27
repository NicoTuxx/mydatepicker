import { Pipe, PipeTransform } from '@angular/core';
import {LocaleService} from '../services/my-date-picker.locale.service';
import {LongLabelService} from '../services/my-date-picker.long-label.service';

@Pipe({
  name: 'myMonthLabel'
})
export class MyMonthLabelPipe implements PipeTransform {
  constructor(
    private longLabelService: LongLabelService,
    private localeService: LocaleService) {
  }

  transform(month: number, locale: string): string {
    let lang = (locale !== undefined) ? locale : 'en';
    let longLabels = this.longLabelService.getLongLabels(lang);
    let options = this.localeService.getLocaleOptions(lang);

    let monthLabels = Object.keys(options['monthLabels']).reduce((obj, key) => {
      obj[options['monthLabels'][key]] = key;
      return obj;
    }, {});

    return longLabels['monthLabels'][monthLabels[month]];
  }
}
