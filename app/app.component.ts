// Copyright 2017 chaishushan{AT}gmail.com. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import * as ngCore from '@angular/core';

@ngCore.Component({
	selector: 'my-app',
	template: `<h1>你好, {{name}}</h1>`
})
export class AppComponent {
	name = '世界'
}

