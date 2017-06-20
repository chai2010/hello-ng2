// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// fork from polyfills.ts
import 'core-js/es6/reflect'
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

import { NgModule, Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

@Component({
	selector: 'my-app',
	template: `<h1>你好, {{name}}</h1>`
})
export class AppComponent {
	name = '世界'
}

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	//
}

export function main() {
	platformBrowserDynamic().bootstrapModule(AppModule)
}
