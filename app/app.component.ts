import {Component} from 'angular2/core';
import {InitCapsPipe} from "./init-caps/init-caps.pipe";

@Component({
    selector: 'my-app',
    template: '<h1>{{"hello world!" | initCaps}}</h1>',
    pipes: [InitCapsPipe]
})
export class AppComponent { }
