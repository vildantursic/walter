import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import * as io from "socket.io";
import { Observable } from "rxjs/Rx";

import {Walter} from "./object";
import {ObjectDetailComponent} from "./object-detail.component";
import {ObjectService} from "./object.service";

@Component({
  directives: [ObjectDetailComponent],
  selector: "objects",
  styleUrls: ["../styles/objects.component.css"],
  templateUrl: "../views/objects-component.html"
})
export class ObjectsComponent implements OnInit {

  public selectedObject: Walter;
  public objects: any;

  constructor(
    private _router: Router,
    private _objectService: ObjectService) {
    // let socket = io("http://localhost:4000/entities");
    // socket.on("entity", (data) => {
    //   console.log(data);
    //   this.objects = data;
    // });
  }

  loadObjectsInStream () {
    let socket = io("http://localhost:4000/entities");
    let objects: any;

    let socketMessageStream = Observable.create(observer => {
      socket.on("entity", (data: Object) => {
        console.log(data);
        observer.onNext(data);
      });
    });

    socketMessageStream.subscribe((data: Object) => {
      objects.push(data);
    });
  };

  onSelect(object: Walter) { this.selectedObject = object; }

  getObjects() {
    this._objectService.getObjects()
                   .subscribe(
                       objects => this.objects = objects,
                     error =>  console.log("Error white calling objects"));
  }

  ngOnInit() {
    this.getObjects();
  }

  gotoDetail() {
    this._router.navigate(["ObjectDetail", { id: this.selectedObject.id }]);
  }

}