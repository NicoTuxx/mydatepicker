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
    console.log(longLabels);
    console.log(options);

    switch (day) {
      case 'Lun':
        return 'Lundi';
      case 'Mar':
        return 'Mardi';
      case 'Mer':
        return 'Mercredi';
      case 'Jeu':
        return 'Jeudi';
      case 'Ven':
        return 'Vendredi';
      case 'Sam':
        return 'Samedi';
      case 'Dim':
        return 'Dimanche';
      default:
        return '';
    }
  }
}
