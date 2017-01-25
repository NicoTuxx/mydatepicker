import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MyDatePicker} from './my-date-picker.component';
import {InputFocusDirective} from './directives/my-date-picker.input.directive';
import {MyDatePipe, MyDayLabelPipe, MyMonthLabelPipe} from './pipes';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ MyDatePicker, InputFocusDirective, MyDatePipe, MyDayLabelPipe, MyMonthLabelPipe ],
    exports: [ MyDatePicker, InputFocusDirective, MyDatePipe, MyDayLabelPipe, MyMonthLabelPipe ]
})
export class MyDatePickerModule { }
