import { Component, OnInit } from "angular2/core";
import { Router } from "angular2/router";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: "dashboard",
  templateUrl: "views/dashboard-component.html",
  styleUrls: ["styles/dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _router: Router,
              private _heroService: HeroService) {

              }

  ngOnInit() {
    this.getTopHeroes();
  }

  getTopHeroes() {
    this._heroService.getHeroes()
                  .map(heroes => this.heroes = heroes.slice(1, 5))
                  .subscribe(
                    heroes => this.heroes = heroes,
                    error =>  console.log("Error white calling heroes"));
  }

  gotoDetail(hero: Hero) {
    let link = ["HeroDetail", { id: hero.id }];
    this._router.navigate(link);
  }

}
