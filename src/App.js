import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import BigContainer from './components/BigContainer';
import {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const style = {
    width: 100 + "%",
    height: 'auto'
  }
  return (
    <div className="App">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='d-flex' style={style} >
        <SideBar darkMode={darkMode} />
        <BigContainer darkMode={darkMode} />
      </div>

    </div>
  );
}

export default App;
