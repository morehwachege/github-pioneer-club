import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import BigContainer from './components/BigContainer';
import {useEffect, useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [gitUser, setGitUser] = useState([]);
  const [showGitUser, setShowGitUser] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users")
        .then(res => res.json())
        .then( data => {
            setGitUser(data)
            setShowGitUser(data)
        })
    }, [])
  const style = {
    width: 100 + "%",
    height: 'auto'
  }
  return (
    <div className="App">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='d-flex' style={style} >
        <SideBar darkMode={darkMode} gitUser={gitUser} setShowGitUser={setShowGitUser} />
        <BigContainer darkMode={darkMode} showGitUser={showGitUser} />
      </div>

    </div>
  );
}

export default App;
