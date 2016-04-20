import {Component, OnInit, Pipe} from "angular2/core";
import { Router } from "angular2/router";
import { Walter } from "./object";
import { ObjectService } from "./object.service";

@Pipe({name: 'data'})
class Data {
  transform(v: any, args: any[]) {
    console.log(v);
    console.log(typeof v);
    return v;
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

  constructor(private _router: Router, private _objectService: ObjectService) {}

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
