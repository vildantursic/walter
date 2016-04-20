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

  constructor(private _router: Router,
              private _objectService: ObjectService) {
                let socket = io("http://localhost:4000/entities");
                socket.on("entity", (data) => {
                  console.log(data);
                  this.objects = data;
                });
              }

  ngOnInit() {
    this.getTopObjects();
  }

  getTopObjects() {
    this._objectService.getObjects()
                  .map(objects => this.objects = objects.slice(1, 5))
                  .subscribe(
                      objects => this.objects = objects,
                    error =>  console.log("Error white calling objects"));
  }

  gotoDetail(object: Walter) {
    let link = ["ObjectDetail", { id: object.id }];
    this._router.navigate(link);
  }

}
