// Copyright 2017 WuHan Visiontek LNC. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// jake -T
// jake -h
// jake run page=index.html debug=true
// jake run[arg1,arg2,...] page=index.html debug=true

const fs = require('fs')
const child_process = require('child_process')

desc('默认任务')
task('default', {async: true}, function() {
	let cmds = [
		'electron .',
	]
	jake.exec(cmds, {printStdout: true, printStderr: true}, function() {
		complete()
	})
})

