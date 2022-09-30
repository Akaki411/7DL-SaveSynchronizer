import React, {Component} from 'react';

class ChangeDirectory extends Component
{
    constructor(props)
    {
        super(props);

        this.dirChange = React.createRef();

        this.state ={
            dir: "Загрузка..."
        };
    }

    componentDidMount()
    {
        window.api.GetPath().then((data) => {
            this.setState({dir: data})
            this.props.OnPathLoad()
        })
    }

    OnDirChange()
    {
        let s = this.state;
        s.dir = this.dirChange.current.files[0].path;
        this.setState(s);
        window.api.SetPath(s.dir)
        this.props.OnPathLoad()
    }

    render()
    {
        return (
            <div
                className="app-top-changeDirectory">
                <nobr className='gtext12px app-top-changeDirectory_title'> Игра: {this.state.dir}</nobr>
                <label className='app-top-changeDirectory_button'>
                    <div>
                        <p className='wtext12px'>Обзор</p>
                    </div>
                    <input type="file" ref={this.dirChange} onChange={() => {this.OnDirChange()}} />
                </label>
            </div>
        );
    }
}

export default ChangeDirectory;