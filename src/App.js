import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import About from './components/About';
import BigContainer from './components/BigContainer';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [gitUser, setGitUser] = useState([]);
  const [showGitUser, setShowGitUser] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => {
        setGitUser(data)
        setShowGitUser(data)
      })
  }, [])
  const style = {
    width: 100 + "%",
    height: 'auto'
  }
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
