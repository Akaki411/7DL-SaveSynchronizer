const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
        width: 700,
        height: 500,
        resizable: false,
        titleBarStyle: "hidden"
    })



    win.loadURL('http://localhost:3000');
    //win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
