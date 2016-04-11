"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("angular2/core");
const http_1 = require("angular2/http");
const Rx_1 = require("rxjs/Rx");
let HeroService = class HeroService {
    constructor(http) {
        this.http = http;
        this._heroesUrl = "http://localhost:4000/api/";
    }
    getHeroes() {
        return this.http.get(this._heroesUrl + "heroes")
            .map((res) => res.json())
            .do((data) => console.log(data))
            .catch(this.handleError);
    }
    getHero(id) {
        return this.http.get(this._heroesUrl + "hero" + id)
            .map((res) => res.json())
            .do((data) => console.log(data))
            .catch(this.handleError);
    }
    addHero(name) {
        let body = JSON.stringify({ name: name });
        let headers = new http_1.Headers({ "Content-Type": "application/json" });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._heroesUrl, body, options)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    handleError(error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || "Server error");
    }
};
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
