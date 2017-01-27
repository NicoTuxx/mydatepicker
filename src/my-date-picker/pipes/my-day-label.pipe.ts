import { Pipe, PipeTransform } from '@angular/core';
import {LongLabelService} from '../services/my-date-picker.long-label.service';

@Pipe({
  name: 'myDayLabel'
})
export class MyDayLabelPipe implements PipeTransform {
  constructor(private longLabelService: LongLabelService) {

  }

  transform(day: string, locale: string): string {
    console.log(locale);
    let longLabels = this.longLabelService.getLongLabels('fr');

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
