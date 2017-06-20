// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import * as ngCore            from '@angular/core'
import * as ngPlatformBrowser from '@angular/platform-browser'

import * as mainComponent from './main.component'

@ngCore.NgModule({
	imports: [ ngPlatformBrowser.BrowserModule ],
	declarations: [ mainComponent.MainComponent ],
	bootstrap: [ mainComponent.MainComponent ],
})
export class MainModule {
	//
}

