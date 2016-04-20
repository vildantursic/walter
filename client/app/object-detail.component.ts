import {Component, Input, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Rx";

import {Walter} from "./object";
import {ObjectService} from "./object.service.ts";

@Component({
  selector: "hero-detail",
  templateUrl: "../views/object-detail-component.html",
  styleUrls: ["../styles/object-detail.component.css"]
})

export class ObjectDetailComponent implements OnInit {

  @Input()
  public object: Walter;

  constructor(private _objectService: ObjectService,
              private _routeParams: RouteParams) {};

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    let id = +this._routeParams.get("id");
    this._objectService.getObjects()
                   .subscribe(
                     hero => this.object = hero[id],
                     error =>  console.log("Error white calling objects"));
  }

  goBack() {
    window.history.back();
  }

}
