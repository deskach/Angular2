import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    constructor(private _el: ElementRef) {
    }

    onMouseEnter() { this._highlight("yellow"); }
    onMouseLeave() { this._highlight(null); }

    private _highlight(color: string) {
        this._el.nativeElement.style.backgroundColor = color;
    }
}

/*
Notes:
 - Angular creates a new instance of the directive's controller class for each matching element,
 injecting an Angular ElementRef into the constructor.

 */