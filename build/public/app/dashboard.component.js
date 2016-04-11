"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("angular2/core");
let DashboardComponent = class DashboardComponent {
    constructor(_router, _heroService) {
        this._router = _router;
        this._heroService = _heroService;
        this.heroes = [];
    }
    ngOnInit() {
        this.getTopHeroes();
    }
    getTopHeroes() {
        this._heroService.getHeroes()
            .map(heroes => this.heroes = heroes.slice(1, 5))
            .subscribe(heroes => this.heroes = heroes, error => console.log("Error white calling heroes"));
    }
    gotoDetail(hero) {
        let link = ["HeroDetail", { id: hero.id }];
        this._router.navigate(link);
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: "dashboard",
        templateUrl: "views/dashboard-component.html",
        styleUrls: ["styles/dashboard.component.css"]
    })
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
