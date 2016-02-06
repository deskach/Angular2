import {Component} from 'angular2/core';
import {HeroBirthday} from './hero-birthday1.component';
import {PowerBooster} from './power-booster.component';
import {PowerBoostCalculator} from './power-boost-calculator.component'

@Component({
    selector: 'app-component',
    template: `
    <h1>{{title}}</h1>
    <hero-birthday></hero-birthday>
    <power-booster></power-booster>
    <power-boost-calculator></power-boost-calculator>
    `,
    directives: [HeroBirthday, PowerBooster, PowerBoostCalculator]
})
export class AppComponent {
    public title = 'Learning Angular2 pipes'
}
