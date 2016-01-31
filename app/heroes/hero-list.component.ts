import { Component, Inject } from 'angular2/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import {APP_CONFIG} from "./app-config";
import {Config} from "./app-config";

@Component({
    selector: 'hero-list',
    template: `
        <h2>{{_config.title}}</h2>
        <div *ngFor="#hero of heroes">
        {{hero.id}} - {{hero.name}}
        </div>
  `,
})

export class HeroListComponent {
    public heroes:Hero[];

    // Angular's DI will use providers property from HeroesComponent to resolve the HeroService dependency
    constructor(heroService:HeroService,
                @Inject(APP_CONFIG) private _config:Config) {
        this.heroes = heroService.getHeroes();
    }
}
