import './App.css';
import ChangeDirectory from "./components/ChangeDirectory";
import Account from "./components/Account";
import UploadSave from "./components/UploadSave";
import DownloadSave from "./components/DownloadSave";
import SaveList from "./components/SaveList";
import Status from "./components/Status";
import FileManager from "./ProgramOptions/FileManager";

function App() {

    return (
    <div className="App">
      <div className='app-top'>
            <ChangeDirectory/>
            <Account/>
      </div>
      <div className='app-middle'>
            <UploadSave/>
          <DownloadSave>
              <Status/>
          </DownloadSave>
      </div>
      <div className='app-down'>
            <SaveList title='Локальные сохранения:'/>
            <SaveList title='Облачные сохранения:'/>
      </div>
    </div>
      );
}

export default App;
