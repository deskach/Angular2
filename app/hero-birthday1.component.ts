import {Component} from 'angular2/core';

@Component({
    selector: 'hero-birthday',
    template: `
    <p>The hero's birthday is {{ birthday | date:format }}</p>
    <button (click)="toggleFormat()">Toggle</button>
    `
})
export class HeroBirthday {
    public birthday = new Date(1988, 3, 15); // April 15, 1988

    private formats = ['shortDate', 'fullDate', 'medium', 'short', 'longDate', 'mediumDate'];
    private _index:number = 0;

    public toggleFormat() {
        this._index++;
        this._index %= this.formats.length;
    }

    public get format() {
        return this.formats[this._index];
    }
}
