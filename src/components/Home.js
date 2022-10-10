import NavBar from './NavBar';
import SideBar from './SideBar';
import BigContainer from './BigContainer';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';


function Home({ darkMode, setDarkMode, gitUser, setGitUser, showGitUser, setShowGitUser, loggedInUser, setLoggedInUser }) {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(res => res.json())
            .then(data => {
                setGitUser(data)
                setShowGitUser(data)
            })
    }, [])
    useEffect(() => {
        if (!isLoggedIn) navigate("/login")

    }, [isLoggedIn])
    const style = {
        width: 100 + "%",
        height: 'auto'
    }
    return (
        <div className="Home">
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='d-flex' style={style} >
                <SideBar darkMode={darkMode} gitUser={gitUser} setShowGitUser={setShowGitUser} setIsLoggedIn={setIsLoggedIn}
                    setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
                <BigContainer darkMode={darkMode} showGitUser={showGitUser} />
            </div>
        </div>
    );
}

export default Home;
