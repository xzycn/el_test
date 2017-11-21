const {app, BrowserWindow} = require('electron');
let basicWindowParams = {
        show: true
};
console.log(process.execPath)
console.log(process.pid)
app.on('ready', () => {
    let win = new BrowserWindow(basicWindowParams);
    win.loadURL('http://www.reddit.com/');
    win.on('did-finish-load', () => {
        win.show();
    });
});
