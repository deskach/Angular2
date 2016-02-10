import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {Hero}              from './heroes/hero';
import {HeroService}       from './heroes/hero.service';
import {HeroListComponent} from './heroes/hero-list.component';

@Component({
    selector: 'my-toh',
    template: `
    <h1>Tour of Heroes</h1>
    <hero-list></hero-list>
    `,
    directives: [HeroListComponent],
    providers: [
        HTTP_PROVIDERS,
        HeroService,
    ]
})
export class TohComponent {
}
