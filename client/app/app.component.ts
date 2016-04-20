import {Component} from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

import {ObjectService} from "./object.service.ts";
import {ObjectsComponent} from "./objects.component.ts";
import {DashboardComponent} from "./dashboard.component";
import { ObjectDetailComponent } from "./object-detail.component.ts";

@Component({
  selector: "app",
  templateUrl: "views/app-component.html",
  styleUrls: ["styles/app.component.css"],
  directives: [ROUTER_DIRECTIVES, ObjectsComponent],
  providers: [
    ROUTER_PROVIDERS,
    ObjectService
  ]
})

@RouteConfig([
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: "/objects",
    name: "Objects",
    component: ObjectsComponent
  },
  {
    path: "/detail/:id",
    name: "ObjectDetail",
    component: ObjectDetailComponent
  }
])

export class AppComponent {
    public title: string = "Our Objects";
}
