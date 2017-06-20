// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// fork from polyfills.ts
import 'core-js/es6/reflect'
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

import * as ngPlatformBrowserDynamic from '@angular/platform-browser-dynamic'

import * as mainModule from './main.module'

export function main() {
	ngPlatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(mainModule.MainModule)
}
