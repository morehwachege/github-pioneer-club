import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';

function UserDetailedCard({ darkMode, setDarkMode, gitUser, setShowGitUser, showGitUser }) {
    // <SideBar darkMode={darkMode} gitUser={gitUser} setShowGitUser={setShowGitUser} />
    let { id } = useParams();
    const style = {
        width: 100 + "%"
    }
    function getFiltered() {
        return new Promise(Resolve => {
            Resolve(showGitUser.find(user => user.id === Number(id)))
        })
    }
    const user = showGitUser.find(user => user.id === Number(id));
    return (
        <>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='d-flex' style={style} >
                <SideBar darkMode={darkMode} gitUser={gitUser} setShowGitUser={setShowGitUser} />
                <div className='d-flex justify-content-center align-items-center flex-wrap' style={style}>

                    {
                        user ?
                            <div className="card m-3" style={{ width: 24 + 'rem', background: darkMode ? 'white' : 'black' }}>
                                <img className="card-img-top" src={user.avatar_url} alt={`${user.login}'s github avatar`} />

                                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                    <h5 className="card-title">{user.login}</h5>
                                    <p className="card-text">{user.name ? user.name : ''}</p>
                                    <a href={user.html_url} className="btn btn-warning">See full profile</a>
                                </div>
                            </div>
                            :
                            <p className='text-center'>Loading...</p>
                    }

                </div>
            </div>
            {/* <p>{user ? user.login : undefined}</p> */}
        </>
    )
}

export default UserDetailedCard