import {Component}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroListComponent}     from './hero-list.component';
import {HeroDetailComponent}   from './hero-detail.component';
import {HeroService}           from './hero.service';
import {CrisisCenterComponent} from "../crisis-center/crisis-center.component";
import {DialogService} from "../dialog.service";

@Component({
    selector: 'my-app',
    template: `
    <h1>Component Router</h1>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <!--<a [routerLink]="['CrisisCenter', 'CrisisDetail', {id:1}]">Princess Crisis</a>-->
    </nav>
    <router-outlet></router-outlet>
  `,
    providers: [HeroService, DialogService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { // Crisis Center child route
        path: '/crisis-center/...',
        name: 'CrisisCenter',
        component: CrisisCenterComponent,
        useAsDefault: true
    },
    {path: '/heroes', name: 'Heroes', component: HeroListComponent},
    {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
    //{path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
export class AppComponent {
}
