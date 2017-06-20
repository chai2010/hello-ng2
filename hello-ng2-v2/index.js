"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/es6/reflect");
require("core-js/es7/reflect");
require("zone.js/dist/zone");
var ngPlatformBrowserDynamic = require("@angular/platform-browser-dynamic");
var mainModule = require("./main.module");
function main() {
    ngPlatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(mainModule.MainModule);
}
exports.main = main;
