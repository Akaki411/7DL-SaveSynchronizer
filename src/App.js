import './App.css';
import ChangeDirectory from "./components/ChangeDirectory";
import Account from "./components/Account";
import UploadSave from "./components/UploadSave";
import DownloadSave from "./components/DownloadSave";
import SaveList from "./components/SaveList";
import Status from "./components/Status";
import {Component} from "react";
import AuthMenu from "./components/AuthMenu";
import LoginMenu from "./components/LoginMenu";
import Save from "./components/Save";

class App extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            accountInfo: false,
            isAuth: true,
            localSaves: []
        }
    }

    HideWindow()
    {
        window.api.HideWindow()
    }

    LoadSaves()
    {
        window.api.GetSaves().then(data => {
            this.setState({localSaves: data})
        })
    }

    render()
    {
        return (
            <div className="App">
                <div className="app-header" >
                    <div className="app-header_button" onClick={()=>{window.close()}}>x</div>
                    <div className="app-header_button" onClick={()=>{this.HideWindow()}}>_</div>
                </div>
                <div className='app-top'>
                    <ChangeDirectory OnPathLoad={() => this.LoadSaves()}/>
                    <Account OnClick={() => {this.setState({accountInfo: !this.state.accountInfo})}}>
                        {this.state.isAuth && this.state.accountInfo && <AuthMenu/>}
                        {!this.state.isAuth && this.state.accountInfo && <LoginMenu/>}
                    </Account>
                </div>
                <div className='app-middle'>
                    <UploadSave/>
                    <DownloadSave>
                        <Status/>
                    </DownloadSave>
                </div>

                <div className='app-down'>
                    <SaveList title='Локальные сохранения:'>
                        {this.state.localSaves.map(save => {
                            return <Save key={save.id} data={save}/>
                        })}
                    </SaveList>
                    <SaveList title='Облачные сохранения:'/>
                </div>
            </div>
        );
    }
}

export default App;
