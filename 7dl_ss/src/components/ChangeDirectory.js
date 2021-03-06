import React, {Component} from 'react';
const FileManager = require('../ProgramOptions/FileManager');

class ChangeDirectory extends Component
{
    constructor(props)
    {
        super(props);

        this.dirChange = React.createRef();

        this.state ={
            dir: "C:\\Program Files\\7sd_conv-1.1.7-pc"
        };
    }

    OnDirChange()
    {
        let s = this.state;
        s.dir = this.dirChange.current.value;
        this.setState(s);
        FileManager.SaveNewPath(this.dirChange.current.value);
    }

    render()
    {
        return (
            <label
                className="app-top-changeDirectory">
                <nobr className='gtext12px app-top-changeDirectory_title'> Игра: {this.state.dir}</nobr>
                <label className='app-top-changeDirectory_button'>
                    <div>
                        <p className='wtext12px'>Обзор</p>
                    </div>
                    <input type="file" webkitdirectory="" directory="" ref={this.dirChange} onChange={() => {this.OnDirChange()}}/>
                </label>
            </label>
        );
    }
}

export default ChangeDirectory;