import {Component} from 'angular2/core';
import {Hero} from './../interfaces/hero';

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label for="name">name: </label>
                <input [(ngModel)]="hero.name" placeholder="name" id="name">
            </div>
        </div>
    `
})
export class HeroDetailComponent {
    public hero: Hero;
}
