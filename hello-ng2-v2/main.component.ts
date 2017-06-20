// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import * as ngCore from '@angular/core'

@ngCore.Component({
	selector: 'my-app',
	template: `
		<h1>你好, {{name}}! - V2</h1>
	`,
	styles: [
		`h1 {
			color: #369;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 250%;
		}`,
	],
})
export class MainComponent {
	name = '世界'
}

