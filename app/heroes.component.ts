import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";

import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";

@Component({
  selector: "heroes",
  templateUrl: "views/heroes-component.html",
  styleUrls: ["styles/heroes.component.css"],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

  public selectedHero: Hero;

  public heroes: Array<Hero>;


  constructor(
    private _router: Router,
    private _heroService: HeroService) { }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  getHeroes() {
    this._heroService.getHeroes()
                   .subscribe(
                     heroes => this.heroes = heroes,
                     error =>  console.log("Error white calling heroes"));
  }

  addHero (name: string) {
    if (!name) { return; }
    this._heroService.addHero(name)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error =>  console.log("Error white sending heroes"));
  }

  ngOnInit() {
    this.getHeroes();
  }

  gotoDetail() {
    this._router.navigate(["HeroDetail", { id: this.selectedHero.id }]);
  }

}
