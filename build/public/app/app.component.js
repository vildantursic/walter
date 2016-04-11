"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("angular2/core");
const router_1 = require("angular2/router");
const hero_service_1 = require("./hero.service");
const heroes_component_1 = require("./heroes.component");
const dashboard_component_1 = require("./dashboard.component");
const hero_detail_component_1 = require("./hero-detail.component");
let AppComponent = class AppComponent {
    constructor() {
        this.title = "Our Server Heroes";
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "views/app-component.html",
        styleUrls: ["styles/app.component.css"],
        directives: [router_1.ROUTER_DIRECTIVES, heroes_component_1.HeroesComponent],
        providers: [
            router_1.ROUTER_PROVIDERS,
            hero_service_1.HeroService
        ]
    }),
    router_1.RouteConfig([
        {
            path: "/dashboard",
            name: "Dashboard",
            component: dashboard_component_1.DashboardComponent,
            useAsDefault: true
        },
        {
            path: "/heroes",
            name: "Heroes",
            component: heroes_component_1.HeroesComponent
        },
        {
            path: "/detail/:id",
            name: "HeroDetail",
            component: hero_detail_component_1.HeroDetailComponent
        }
    ])
], AppComponent);
exports.AppComponent = AppComponent;
