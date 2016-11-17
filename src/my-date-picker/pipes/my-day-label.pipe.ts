import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDayLabel'
})
export class MyDayLabelPipe implements PipeTransform {
  transform(day: string): string {
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
    }
  }
}
