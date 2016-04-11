import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Rx";
import {Hero} from "./hero";

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  private _heroesUrl: string = "http://localhost:4000/api/";

  getHeroes () {
    return this.http.get(this._heroesUrl + "heroes")
      .map((res: Response) => <Hero[]> res.json())
      .do((data: Object ) => console.log(data))
      .catch(this.handleError);
  }
  //////////////////////////

  getHero(id: number) {
    return this.http.get(this._heroesUrl + "hero" + id)
      .map((res: Response) => res.json())
      .do((data: Object ) => console.log(data))
      .catch(this.handleError);
  }
  //////////////////////////

  addHero (name: string): Observable<Hero>  {

    let body = JSON.stringify({ name });
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._heroesUrl, body, options)
                    .map((res: Response) =>  <Hero> res.json())
                    .catch(this.handleError);
  }
  //////////////////////////

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
