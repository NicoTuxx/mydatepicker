import {Directive, ElementRef, Renderer, OnInit, Input} from '@angular/core';

@Directive({
    selector: '[inputFocus]',
    inputs: ['inputFocus']
})

export class InputFocusDirective implements OnInit {
    @Input() focusActive: boolean = true;
    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngOnInit() {
        // Sets focus to rendered input element (month or year value)
        this.invokeFocus();
    }

    invokeFocus() {
      if (this.focusActive === true) {
          this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
        }
    }
}
