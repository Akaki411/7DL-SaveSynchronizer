const Fs = require('fs');

class FileManager
{
    constructor()
    {
        // const json1 = Fs.readFileSync('parameters.json', 'utf8');
        // this.params = JSON.parse(json1);
        // console.log(json1)
        // this.FindSaves()
    }

    static SaveNewPath(path)
    {
        this.params.dir = path;

        const json2 = JSON.stringify(this.params);
        Fs.writeFileSync('parameters.json', json2);
    }
    //
    // async FindSaves()
    // {
    //     Fs.readdirSync(this.params.dir).then((value) => {
    //         console.log(value)
    //         //return value;
    //     })
    // }
}

export default FileManager;