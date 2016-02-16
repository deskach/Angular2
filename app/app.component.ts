import {Component} from 'angular2/core';
import {InitCapsPipe} from "./init-caps/init-caps.pipe";
import {Hero} from "./hero/hero";

@Component({
    selector: 'my-app',
    template: '<h1>{{"hello " + hero.name | initCaps}}</h1>',
    pipes: [InitCapsPipe]
})
export class AppComponent {
    public hero: Hero = new Hero(1, 'Bombasto');
}
