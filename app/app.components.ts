import {Component} from "angular2/core";
import {Http, Response} from "angular2/http";
import "rxjs/add/operator/map";

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: "app",
  templateUrl: "views/main.html",
  styleUrls: ["styles/main.css"]
})
export class AppComponent {
  title = "Our Heroes";
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  // public heroes = HEROES;

  public myHeroes: Object;

  constructor(http: Http) {
    http.get("http://localhost:4000/api/heroes")
      .map(res => res.json())
      .subscribe(myHeroes => this.myHeroes = myHeroes);
  }

}

// let HEROES: Hero[] = [
//   { "id": 11, "name": "Mr. Nice" },
//   { "id": 12, "name": "Narco" },
//   { "id": 13, "name": "Bombasto" },
//   { "id": 14, "name": "Celeritas" },
//   { "id": 15, "name": "Magneta" },
//   { "id": 16, "name": "RubberMan" },
//   { "id": 17, "name": "Dynama" },
//   { "id": 18, "name": "Dr IQ" },
//   { "id": 19, "name": "Magma" },
//   { "id": 20, "name": "Tornado" }
// ];
