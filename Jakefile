// Copyright 2017 WuHan Visiontek LNC. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// jake -T
// jake -h

const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

const ngPath = (function() {
	if(process.platform == 'win32') {
		return path.join(__dirname, '.', 'node_modules', '.bin', 'ng.cmd')
	} else {
		return path.join(__dirname, '.', 'node_modules', '.bin', 'ng')
	}
})()

const tscPath = (function() {
	if(process.platform == 'win32') {
		return path.join(__dirname, '.', 'node_modules', '.bin', 'tsc.cmd')
	} else {
		return path.join(__dirname, '.', 'node_modules', '.bin', 'tsc')
	}
})()

const electronPath = (function() {
	if(process.platform == 'win32') {
		return path.join(__dirname, '.', 'node_modules', '.bin', 'electron.cmd')
	} else {
		return path.join(__dirname, '.', 'node_modules', '.bin', 'electron')
	}
})()

desc('默认任务')
task('default', {async: true}, function() {
	let cmds = [
		`${electronPath} hello-ng2-v1`,
	]
	jake.exec(cmds, {printStdout: true, printStderr: true}, function() {
		complete()
	})
})

