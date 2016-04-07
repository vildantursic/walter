import {Component, OnInit} from "angular2/core";
import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

@Component({
  selector: "app",
  templateUrl: "views/app-component.html",
  styleUrls: ["styles/main.css"],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  public title = "Our Server Heroes";
  public selectedHero: Hero;

  public heroes: Array<Hero>;

  onSelect(hero: Hero) { this.selectedHero = hero; }

  constructor(private _heroService: HeroService) { }

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

}
