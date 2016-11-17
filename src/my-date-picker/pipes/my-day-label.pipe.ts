import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDayLabel'
})
export class MyDayLabelPipe implements PipeTransform {
  transform(day: string): string {
    switch (day) {
      case 'lun':
        return 'lundi';
      case 'mar':
        return 'mardi';
      case 'mer':
        return 'mercredi';
      case 'jeu':
        return 'jeudi';
      case 'ven':
        return 'vendredi';
      case 'sam':
        return 'samedi';
      case 'dim':
        return 'dimanche';
    }
  }
}
