import { Component }            from 'angular2/core';
import { HeroListComponent }    from './hero-list.component';
import { HeroService }          from './hero.service';
import { Logger }               from './logger.service';

@Component({
    selector: 'my-heroes',
    template: `
        <h2>Heroes</h2>
        <hero-list></hero-list>
  `,
    providers: [HeroService, Logger],
    directives: [HeroListComponent]
})

export class HeroesComponent {
}
