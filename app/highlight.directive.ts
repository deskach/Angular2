import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}

/*
Notes:
 - Angular creates a new instance of the directive's controller class for each matching element,
 injecting an Angular ElementRef into the constructor.

 */