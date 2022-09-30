const Fs = require('fs');
const AdmZip = require("adm-zip");

class FileManager
{
    constructor()
    {
        this.params = {
            GamePath: "Загрузка...",
            login: null,
            password: null
        }
    }

    LoadDir()
    {
        return new Promise(resolve => {
            Fs.readFile('./electron/settings/parameters.json', 'utf8', (error, data) => {
                this.params = JSON.parse(data)
                resolve(this.params)
            })
        })
    }

    GetPath()
    {
        return this.params.GamePath
    }

    GetLogin()
    {
        return this.params.login
    }

    GetPassword()
    {
        return this.params.password
    }

    SaveNewPath(path)
    {
        this.params.GamePath = path;
        this.RefactorParams()
    }

    RefactorParams()
    {
        const newJSON = JSON.stringify(this.params);
        Fs.writeFile('./electron/settings/parameters.json', newJSON, (err) => {
            if(err) console.log(err)
        });
    }

    async GetSaves()
    {
        if(this.params.GamePath.includes('\\'))
        {
            const gamePath = this.params.GamePath.split('\\')
            let savePath = ""
            gamePath.pop()
            for(let i = 0; i < gamePath.length; i++)
            {
                savePath += gamePath[i] + "\\"
            }
            savePath += "game\\saves\\"
            return new Promise((resolve => {
                Fs.readdir(savePath, async (err, value) => {
                    resolve(await this.SaveReader(savePath, value))
                })
            }))
        }
        else
        {
            return {error: "Неверный формат пути"}
        }
    }

    async GetRefactorDate(path)
    {
        return await new Promise((resolve, reject) => {
            Fs.stat(path, (err,stat) => {
                resolve(stat.ctime)
                reject(err)
            })
        })
    }

    async SaveReader(savePath, saves)
    {
        return new Promise(async (resolve) => {
            let saveList = []
            for(let i = 0; i < saves.length; i++)
            {
                let save = {
                    id: i,
                    name: "",
                    date: await this.GetRefactorDate(savePath + saves[i])
                }

                if(saves[i].includes(".save"))
                {
                    let zip = new AdmZip(savePath + saves[i])
                    let zipEntries = zip.getEntries();
                    zipEntries.forEach((zipEntry) => {
                        if (zipEntry.entryName === "extra_info")
                        {
                            save.name = zipEntry.getData().toString("utf8")
                            if(saves[i].includes("auto"))
                            {
                                save.name += " (auto)"
                            }
                        }
                    });
                }
                else if(saves[i] === "persistent")
                {
                    save.name = "Прогресс прочитанного текста"
                }
                saveList[i] = save
            }
            resolve(saveList)
        })
    }
}

module.exports = FileManager