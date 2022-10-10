import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import UserDetailedCard from './components/UserDetailedCard';
import Login from './components/Auth';
import SignUp from './components/SignUp';

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
  // const style = {
  //   width: 100 + "%",
  //   height: 'auto'
  // }
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route exact path="/" element={
            <Home darkMode={darkMode} setDarkMode={setDarkMode} setGitUser={setGitUser} gitUser={gitUser} setShowGitUser={setShowGitUser} showGitUser={showGitUser} />
          } />
          <Route path="/about" element={
            <About darkMode={darkMode} setDarkMode={setDarkMode} showGitUser={showGitUser} />
          } />
          <Route path="/users/:id" element={
            <UserDetailedCard darkMode={darkMode} setDarkMode={setDarkMode} gitUser={gitUser} setShowGitUser={setShowGitUser} showGitUser={showGitUser} />
          } />
          <Route path="/login" element={
            <Login darkMode={darkMode} setDarkMode={setDarkMode} />
          } />
          <Route path="/signup" element={
            <SignUp darkMode={darkMode} setDarkMode={setDarkMode} />
          } />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
