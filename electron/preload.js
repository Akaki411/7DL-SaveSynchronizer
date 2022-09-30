const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    HideWindow: () => ipcRenderer.send('window/hide'),
    GetPath: () => ipcRenderer.invoke('file_manager/get_path'),
    SetPath: (args) => ipcRenderer.invoke('file_manager/set_path', args),
    GetSaves: () => ipcRenderer.invoke('file_manager/get_saves')
});