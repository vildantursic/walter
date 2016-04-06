import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";
import {AppComponent} from "./app.components";

bootstrap(AppComponent, [
  HTTP_PROVIDERS
]);
