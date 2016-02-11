import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    private _defaultColor = 'red';
    public color:string = this._defaultColor;

    @Input('myHighlight') highlightColor:string;

    @Input() set defaultColor(colorName:string) {
        this._defaultColor = colorName || this._defaultColor;
    }

    constructor(private el:ElementRef) {
    }

    onMouseEnter() {
        this._highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() {
        this._highlight(null);
    }

    private _highlight(color:string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}

/*
 Notes:
 - Angular creates a new instance of the directive's controller class for each matching element,
 injecting an Angular ElementRef into the constructor.

 */