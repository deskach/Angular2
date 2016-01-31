import { Component }   from 'angular2/core';
import { HeroService }      from './hero.service';

@Component({
    selector: 'hero-list',
    template: `
        <div *ngFor="#hero of heroes">
        {{hero.id}} - {{hero.name}}
        </div>
  `,
})

export class HeroListComponent {
    heroes = (new HeroService()).getHeroes();
}
