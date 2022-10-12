import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { FaGithub } from "react-icons/fa";
import { UserContext } from '../contexts/UserContext';


function UserDetailedCard({ darkMode, setDarkMode, gitUser, setShowGitUser, showGitUser }) {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    const navigate = useNavigate();
    const [orgs, setOrgs] = useState([])
    let { id } = useParams();
    const style = {
        width: 100 + "%"
    }
    const user = showGitUser.find(user => user.id === Number(id));
    useEffect(() => {
        if (user && user.organizations_url) {
            fetch(`${user.organizations_url}`)
                .then(res => res.json())
                .then(data => {
                    setOrgs(data)
                })
        }
    }, []);

    useEffect(() => {
        if (!isLoggedIn) navigate("/login")

    }, [isLoggedIn])

    return (
        <>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='d-flex' style={style} >
                <SideBar darkMode={darkMode} gitUser={gitUser} setShowGitUser={setShowGitUser} setIsLoggedIn={setIsLoggedIn} />
                <div className='d-flex justify-content-between align-items-center flex-wrap flex-column' style={style}>
                    {
                        user ?
                            <div className='container d-flex justify-content-center align-items-center p-3'>
                                <div className="card m-3" style={{ width: 24 + 'rem', background: darkMode ? 'white' : 'black' }}>
                                    <img className="card-img-top" src={user.avatar_url} alt={`${user.login}'s github avatar`} />

                                    <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                        <h5 className="card-title">{user.login}</h5>
                                        <p className="card-text">{user.name ? user.name : ''}</p>
                                        <a href={user.html_url} className="btn btn-warning">See full profile</a>
                                    </div>
                                </div>
                                <div className="card-body d-flex justify-content-center align-items-center flex-column flex-wrap">
                                    <h2 className="card-title">Profiles</h2>
                                    <a href={user.html_url}>
                                        <p className='text-center d-flex justify-content-center align-items-center' style={{ fontSize: 20 + "px" }}>
                                            <span className='m-3'>GitHub</span> <FaGithub /></p>
                                    </a>
                                    <h5 className="card-title">Username: {user.login}</h5>
                                    <p className="card-text">Followers: {user.followers_url.length}</p>
                                    <p className="card-text">Following: {user.following_url.length}</p>
                                    <h3>Organizations</h3>
                                    <div className='container d-flex justify-content-center align-items-center flex-row flex-wrap'>
                                        {
                                            orgs ?
                                                orgs.map(item => {
                                                    return (
                                                        <div key={item.id}>
                                                            <img className='m-3' height={100} width={100} src={item.avatar_url} />
                                                            <p>{item.login}</p>
                                                        </div>
                                                    )

                                                })
                                                :
                                                ""
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                <p className='text-center'>Searching...</p>
                                <p className='text-center'>In the meantime check if you're on the right path...</p>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default UserDetailedCard