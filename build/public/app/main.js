"use strict";
const browser_1 = require("angular2/platform/browser");
const http_1 = require("angular2/http");
require("rxjs/add/operator/map");
const app_component_1 = require("./app.component");
browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
