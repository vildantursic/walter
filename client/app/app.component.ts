import {Component} from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

import {ObjectsComponent} from "./objects.component";
import {DashboardComponent} from "./dashboard.component";
import { ObjectDetailComponent } from "./object-detail.component";

@Component({
  selector: "app",
  templateUrl: "views/app-component.html",
  styleUrls: ["styles/app.component.css"],
  directives: [ROUTER_DIRECTIVES, ObjectsComponent]
})

@RouteConfig([
  {
    path: "dashboard",
    name: "Dashboard",
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: "objects",
    name: "Objects",
    component: ObjectsComponent
  },
  {
    path: "detail/:id",
    name: "ObjectDetail",
    component: ObjectDetailComponent
  }
])

export class AppComponent {
    public title: string = "Our Objects";
}
