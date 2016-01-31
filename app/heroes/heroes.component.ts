import { Component, provide }   from 'angular2/core';
import { HeroListComponent }    from './hero-list.component';
import { HeroService }          from './hero.service';
import { Logger }               from './logger.service';
import { APP_CONFIG, CONFIG }   from './app-config';

@Component({
    selector: 'my-heroes',
    template: `
        <h2>Heroes</h2>
        <hero-list></hero-list>
  `,

    /*
    // A few examples
     providers: [HeroService, provide(Logger, {useClass: BetterLogger})],

     providers: [
        HeroService,
        NewLogger,
        provide(Logger, {useClass: BetterLogger}),
        provide(OldLogger, {useExisting: NewLogger})) // Alias OldLogger w/ reference to NewLogger
     ],

     // An object in the shape of the logger service
     let silentLogger = {
         logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
         log: () => {}
     };
     providers: [provide(Logger, {useValue: silentLogger})]

   */
    providers: [HeroService, Logger, provide(APP_CONFIG, {useValue: CONFIG } )],

    directives: [HeroListComponent]
})

export class HeroesComponent {
}
