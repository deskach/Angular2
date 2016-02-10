import {Observable}     from 'rxjs/Observable';
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Hero}           from './hero';

@Injectable()
export class HeroService {
    constructor(private http:Http) {
    }

    private _heroesUrl = 'app/heroes';

    getHeroes() {
        return this.http.get(this._heroesUrl)
            .map(res => <Hero[]> res.json().data)
            .do(data => console.log(data)) // eyeball results in the console; comment this out for PROD
            .catch(this.handleError);
        /*
         http.get method returns an Observable of HTTP Responses (Observable<Response>) from the RxJS library
         and map is one of the RxJS operators. This observable is cold which means the request won't go out
         until something subscribes to the observable. That something is the HeroListComponent.
         */
    }

    addHero(name:string):Observable<Hero> {
        let body = JSON.stringify({name});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this._heroesUrl, body, options)
            .map(res => <Hero> res.json().data)
            .catch(this.handleError)
    }

    private handleError(error:Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }

}
