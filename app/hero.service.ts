import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";
import {Hero} from "./hero";

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  getHeroes () {
    return this.http.get("http://localhost:4000/api/heroes")
      .map(res => <Hero[]> res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
