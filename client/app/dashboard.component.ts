import { Component, OnInit } from "angular2/core";
import { Router } from "angular2/router";
import { Walter } from "./object";
import { ObjectService } from "./object.service";

@Component({
  selector: "dashboard",
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
