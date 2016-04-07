import {Component, Input} from "angular2/core";
import {Hero} from "./Hero";

@Component({
  selector: "hero-detail",
  templateUrl: "views/hero-detail-component.html"
})

export class HeroDetailComponent {

  @Input()
  hero: Hero;

}
