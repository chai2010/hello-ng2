"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/es6/reflect");
require("core-js/es7/reflect");
require("zone.js/dist/zone");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var AppComponent = (function () {
    function AppComponent() {
        this.name = '世界';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>\u4F60\u597D, {{name}}</h1>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
}
exports.main = main;
