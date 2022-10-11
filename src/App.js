import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import UserDetailedCard from './components/UserDetailedCard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { UserContext } from './contexts/UserContext';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [gitUser, setGitUser] = useState([]);
  const [showGitUser, setShowGitUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState([]);


  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => {
        setGitUser(data)
        setShowGitUser(data)
      })
  }, [])

  return (
    <Router basename='/github-pioneer-club' >
      <div className="App">

        <UserContext.Provider value={[isLoggedIn, setIsLoggedIn, setLoggedInUser]}>
          <Routes>
            {/* user context */}
            <Route exact path="/" element={
              <Home darkMode={darkMode} setDarkMode={setDarkMode} setGitUser={setGitUser} gitUser={gitUser} setShowGitUser={setShowGitUser} showGitUser={showGitUser}
              setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
            } />
            <Route path="/about" element={
              <About darkMode={darkMode} setDarkMode={setDarkMode} showGitUser={showGitUser} />
            } />
            <Route path="/users/:id" element={
              <UserDetailedCard darkMode={darkMode} setDarkMode={setDarkMode} gitUser={gitUser} setShowGitUser={setShowGitUser} showGitUser={showGitUser} />
            } />
            <Route path="/login" element={
              <Login darkMode={darkMode} setDarkMode={setDarkMode} setLoggedInUser={setLoggedInUser}  />
            } />
            <Route path="/signup" element={
              <SignUp darkMode={darkMode} setDarkMode={setDarkMode}/>
            } />

          </Routes>
        </UserContext.Provider>

      </div>
    </Router >
  );
}

export default App;
