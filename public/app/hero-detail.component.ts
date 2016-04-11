import {Component, Input, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";

import {Hero} from "./Hero";
import {HeroService} from "./hero.service";

@Component({
  selector: "hero-detail",
  templateUrl: "views/hero-detail-component.html",
  styleUrls: ["styles/hero-detail.component.css"]
})

export class HeroDetailComponent {

  public hero: Hero;

  constructor(private _heroService: HeroService,
              private _routeParams: RouteParams) {
                console.log("somethign");
                this._heroService.getHero(3)
                  .subscribe((item: any) => {
                      this.hero = item;
                  });
                console.log(this._heroService.getHero(3));
              };

  // getHero() {
  //   let id = +this._routeParams.get("id");
  //   this._heroService.getHero(3)
  //     .map(hero => this.hero = hero);
  // }

  goBack() {
    window.history.back();
  }

}
