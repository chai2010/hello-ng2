// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import 'zone.js/dist/zone'
import 'core-js/es6/reflect'
import 'core-js/es7/reflect'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'

export function main() {
	platformBrowserDynamic().bootstrapModule(AppModule)
}

