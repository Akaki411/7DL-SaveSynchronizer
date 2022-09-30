const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const FileManager = require('./fileManager')
const SyncManager = require('./syncManager')

let win = null
const fileManager = new FileManager()
const syncManager = new SyncManager()

async function createWindow () {
    win = new BrowserWindow({
        width: 720,
        height: 555,
        resizable: false,
        title: "7 Days of Summer Save Synchronizer",
        icon: "./src/images/favicon.ico",
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        center: true,
        titleBarStyle: "hidden",
        transparent: true,
        frame: false,
        contextIsolation: true
    })

    await fileManager.LoadDir().then((data) =>
    {
        syncManager.Login(data.login, data.password)
    })

    win.setMenu(null);

    await win.loadURL('http://localhost:3000');
    win.webContents.openDevTools()
}

ipcMain.on('window/hide', () =>
{
    win.minimize()
})
ipcMain.handle('file_manager/get_path', async () => {
    return fileManager.GetPath()
})
ipcMain.handle('file_manager/set_path', async (event, arg) => {
    fileManager.SaveNewPath(arg)
})
ipcMain.handle('file_manager/get_saves', async () => {
    return await fileManager.GetSaves()
})

app.whenReady().then(async () => {
    await createWindow()
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
