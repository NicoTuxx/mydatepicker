import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MyDatePicker} from './my-date-picker.component';
import {InputFocusDirective} from './directives/my-date-picker.input.directive';
import {MyDatePipe} from './pipes/my-date.pipe';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ MyDatePicker, InputFocusDirective, MyDatePipe ],
    exports: [ MyDatePicker, InputFocusDirective, MyDatePipe ]
})
export class MyDatePickerModule { }
