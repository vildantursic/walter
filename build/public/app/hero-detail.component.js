"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("angular2/core");
let HeroDetailComponent = class HeroDetailComponent {
    constructor(_heroService, _routeParams) {
        this._heroService = _heroService;
        this._routeParams = _routeParams;
        console.log("somethign");
        this._heroService.getHero(3)
            .subscribe((item) => {
            this.hero = item;
        });
        console.log(this._heroService.getHero(3));
    }
    ;
    goBack() {
        window.history.back();
    }
};
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: "hero-detail",
        templateUrl: "views/hero-detail-component.html",
        styleUrls: ["styles/hero-detail.component.css"]
    })
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
