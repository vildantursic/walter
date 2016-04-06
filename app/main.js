System.register(["angular2/platform/browser", "angular2/http", "./app.components"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, http_1, app_components_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_components_1_1) {
                app_components_1 = app_components_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_components_1.AppComponent, [http_1.HTTP_PROVIDERS])
                .catch(console.error);
        }
    }
});
//# sourceMappingURL=main.js.map