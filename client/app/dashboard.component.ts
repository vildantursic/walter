import {Component, OnInit, Pipe} from "angular2/core";
import { Router } from "angular2/router";
import { Walter } from "./object";
import { ObjectService } from "./object.service";
import * as io from "socket.io-client";

@Pipe({name: "data"})
class Data {
  transform(v: any, args: any[]) {

    if (v !== null && v.hasOwnProperty("_body")) {
      console.log(JSON.parse(v._body));
      return JSON.parse(v._body);
    } else {
      return v;
    }
  }
}

@Component({
  selector: "dashboard",
  pipes: [Data],
  templateUrl: "views/dashboard-component.html",
  styleUrls: ["styles/dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  objects: any;
  public entity: Array<Object> = [];

  constructor(private _router: Router, private _objectService: ObjectService) {
    let socket = io.connect("http://localhost:4000/entity");
    socket.on("entity", (data) => {
      this.entity.push(JSON.parse(data));
      // console.log(this.entity);
    });
  }

  ngOnInit() {
    this.getTopObjects();
  }

  getTopObjects() {
    this.objects = this._objectService.getObjects();
  }

  gotoDetail(object: Walter) {
    let link = ["ObjectDetail", { id: object.id }];
    this._router.navigate(link);
  }

}
