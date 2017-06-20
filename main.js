"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron = require("electron");
var win = null;
function createWindow() {
    win = new electron.BrowserWindow({ width: 800, height: 600 });
    win.loadURL("file://" + __dirname + "/index.html");
    win.webContents.openDevTools();
    win.on('closed', function () { win = null; });
}
electron.app.on('ready', createWindow);
electron.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron.app.quit();
    }
});
electron.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
