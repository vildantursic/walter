"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("angular2/core");
const hero_detail_component_1 = require("./hero-detail.component");
let HeroesComponent = class HeroesComponent {
    constructor(_router, _heroService) {
        this._router = _router;
        this._heroService = _heroService;
    }
    onSelect(hero) { this.selectedHero = hero; }
    getHeroes() {
        this._heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes, error => console.log("Error white calling heroes"));
    }
    addHero(name) {
        if (!name) {
            return;
        }
        this._heroService.addHero(name)
            .subscribe(hero => this.heroes.push(hero), error => console.log("Error white sending heroes"));
    }
    ngOnInit() {
        this.getHeroes();
    }
    gotoDetail() {
        this._router.navigate(["HeroDetail", { id: this.selectedHero.id }]);
    }
};
HeroesComponent = __decorate([
    core_1.Component({
        selector: "heroes",
        templateUrl: "views/heroes-component.html",
        styleUrls: ["styles/heroes.component.css"],
        directives: [hero_detail_component_1.HeroDetailComponent]
    })
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
