import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ObjectService {

  constructor(private http: Http) { }

  private _objectsUrl: string = "http://localhost:4000/api/";

  getObjects () {
    return this.http.get(this._objectsUrl + "entity")
    .map((res: Response) => res)
    .do((data: Object ) => console.log(data))
    .catch(this.handleError);
  }
  //////////////////////////

  // getHero(id: number) {
  //   return this.http.get("http://localhost:4000/api/hero/" + id)
  //   .map(res => res.json())
  //   .subscribe(object => console.log(object));
  // }
  //////////////////////////

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
