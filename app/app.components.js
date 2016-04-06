System.register(["angular2/core", "angular2/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Hero, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Hero = (function () {
                function Hero() {
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
            AppComponent = (function () {
                function AppComponent(http) {
                    var _this = this;
                    this.title = "Our Heroes";
                    this.hero = {
                        id: 1,
                        name: "Windstorm"
                    };
                    http.get("http://localhost:4000/api/heroes")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (myHeroes) { return _this.myHeroes = myHeroes; });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app",
                        templateUrl: "views/main.html",
                        styleUrls: ["styles/main.css"]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
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
//# sourceMappingURL=app.components.js.map