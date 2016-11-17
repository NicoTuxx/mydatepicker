import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MyDatePicker} from './my-date-picker.component';
import {InputFocusDirective} from './directives/my-date-picker.input.directive';
import {MyDatePipe, MyDayLabelPipe} from './pipes';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ MyDatePicker, InputFocusDirective, MyDatePipe, MyDayLabelPipe ],
    exports: [ MyDatePicker, InputFocusDirective, MyDatePipe, MyDayLabelPipe ]
})
export class MyDatePickerModule { }
