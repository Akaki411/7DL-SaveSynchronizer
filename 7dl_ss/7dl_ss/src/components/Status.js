import React, {Component} from 'react';

class Status extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            icon: "load"
        }
    }

    render()
    {
        return (
            <div className='app-middle-block-cell_status'>
                <div className='app-middle-block-cell_status_string'>
                    <p className='gtext12px'>обновление...</p>
                    {this.state.icon === "load" && <Circle/>}
                    {this.state.icon === "done" && <div/>}
                    {this.state.icon === "error" && <div/>}
                </div>
                <div className='app-middle-block-cell_status_loader'>
                    <div/>
                </div>
            </div>
        )
    }
}

const Circle = () => {
    return (
        <div className='rot-loader'>
            <div className='rot-loader_banner'/>
        </div>
    )
}

export default Status;