import { Component }   from 'angular2/core';
import { HeroService }      from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-list',
    template: `
        <div *ngFor="#hero of heroes">
        {{hero.id}} - {{hero.name}}
        </div>
  `,
})

export class HeroListComponent {
    heroes: Hero[];

    // Angular's DI will use providers property from HeroesComponent to resolve the HeroService dependency
    constructor(heroService: HeroService) {
        this.heroes  = heroService.getHeroes();
    }
}
