import {Component} from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import { HeroDetailComponent } from "./hero-detail.component";

@Component({
  selector: "app",
  templateUrl: "views/app-component.html",
  styleUrls: ["styles/app.component.css"],
  directives: [ROUTER_DIRECTIVES, HeroesComponent],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
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
    path: "/heroes",
    name: "Heroes",
    component: HeroesComponent
  },
  {
    path: "/detail/:id",
    name: "HeroDetail",
    component: HeroDetailComponent
  }
])

export class AppComponent {
    public title: string = "Our Server Heroes";
}
