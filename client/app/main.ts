/// <reference path="../../typings/browser.d.ts" />
import {bootstrap} from "angular2/platform/browser";
import { provide } from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {ObjectService} from "./object.service";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ObjectService,
    provide(LocationStrategy, { useClass: HashLocationStrategy })]);
