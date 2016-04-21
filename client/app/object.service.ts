import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable, Subscriber} from 'rxjs/Rx';
import * as io from "socket.io-client";

@Injectable()
export class ObjectService {

  constructor(private http: Http) { }

  private _objectsUrl: string = "http://localhost:4000/api/";

  getObjects (): Observable<any> {
    return this.http.get(this._objectsUrl + "entity")
                  .catch(this.handleError);
  }

  getObjectsSocket (entity: string): Observable<any> {
    return Observable.create((item: Subscriber) => {

        let socket = io.connect("http://localhost:4000/entity");
        socket.on(entity, (data) => {
          item.next(data)
        });

    });
  }

  private handleError (error: Response): Observable<any> {
    return Observable.throw(error.json().error || "Server error");
  }

}
