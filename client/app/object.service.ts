import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ObjectService {

  constructor(private http: Http) { }

  private _objectsUrl: string = "http://localhost:4000/api/";

  getObjects (): Observable<any> {
    return this.http.get(this._objectsUrl + "entity")
                  .catch(this.handleError);
  }
  /*
  getObjectsSocket (): Observable<any> {
    return Observable.webSocket("http://localhost:4000/entity");
  }
  */
  private handleError (error: Response): Observable<any> {
    return Observable.throw(error.json().error || "Server error");
  }

}
