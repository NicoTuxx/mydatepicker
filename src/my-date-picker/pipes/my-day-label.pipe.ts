import { Pipe, PipeTransform } from '@angular/core';
import {LocaleService} from '../services/my-date-picker.locale.service';
import {LongLabelService} from '../services/my-date-picker.long-label.service';

@Pipe({
  name: 'myDayLabel'
})
export class MyDayLabelPipe implements PipeTransform {
  constructor(
    private longLabelService: LongLabelService,
    private localeService: LocaleService) {
  }

  transform(day: string, locale: string): string {
    let lang = (locale !== undefined) ? locale : 'en';
    let longLabels = this.longLabelService.getLongLabels(lang);
    let options = this.localeService.getLocaleOptions(lang);

    let dayLabels = Object.keys(options['dayLabels']).reduce((obj, key) => {
      obj[options['dayLabels'][key]] = key;
      return obj;
    }, {});

    return longLabels['dayLabels'][dayLabels[day]];
  }
}
