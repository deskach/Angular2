import {Component} from 'angular2/core';
import {Input} from "angular2/core";

@Component({
    selector: 'zippy',
    templateUrl: 'app/zippy/zippy.html'
})
export class Zippy {
    public visible: boolean;
    public titleArrow: string;

    @Input('zippy-title') title: string;

    constructor() {
        this.visible = true;
        this.titleArrow = 'arrow-down';
    };

    toggle() {
        this.visible = !this.visible;
        this.titleArrow = this.visible ? 'arrow-down': 'arrow-right';
    }
}
