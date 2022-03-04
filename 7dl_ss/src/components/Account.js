import React, {Component} from 'react';
import Avatar from  "../images/avatar.png"

class Account extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            isHover: false
        }
    }

    Hover(enter)
    {
        this.setState({isHover: enter})
    }


    render()
    {
        return (
            <label className='app-top-account'>
                <div className='app-top-account_image'>
                    <img src={Avatar}/>
                </div>
                <label className='app-top-account_text' onMouseEnter={() => this.Hover(true)} onMouseLeave={() => this.Hover(false)}>
                    <div className={this.state.isHover ? 'app-top-account_text_triangle hovered' : 'app-top-account_text_triangle'}/>
                    <nobr className={this.state.isHover ? 'gtext12px hovered' : 'gtext12px'}>
                        akovalysko123@yandex.ru
                    </nobr>
                    <button onClick={() => {alert("Пока не робит :(")}}/>
                </label>
            </label>
        )
    }
}

export default Account;