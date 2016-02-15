import {Component} from 'angular2/core';
import {Zippy} from "./zippy/zippy";

@Component({
    selector: 'the-app',
    template: `<zippy zippy-title="Details"></zippy>`,
    directives: [Zippy]
})
export class TheApp {

}