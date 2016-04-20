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

  objects: Walter[] = [];

  constructor(private _router: Router, private _objectService: ObjectService) {}

  ngOnInit() {
    this.getTopObjects();
  }

  getTopObjects() {
    this._objectService.getObjects()
                  .map((objects: any) => this.objects = objects.slice(1, 5))
                  .subscribe(
                      objects => this.objects = objects,
                    error =>  console.log("Error white calling objects"));
  }

  gotoDetail(object: Walter) {
    let link = ["ObjectDetail", { id: object.id }];
    this._router.navigate(link);
  }

}
