import React from 'react'


function SideBar({ darkMode, gitUser, setShowGitUser, setIsLoggedIn }) {
    const styles = {
        width: '280' + 'px',
        height: '100vh',
        backgroundColor: darkMode ? '#f2f2f2' : 'black',
        color: darkMode ? 'black' : 'white',
        zIndex: 2
    }
    const colorMode = { color: darkMode ? 'black' : '#f2f2f2' }

    function handleSearch(e) {
        let filteredUsers = gitUser.filter(user => user.login.includes(e.target.value))
        setShowGitUser(filteredUsers)
    }

    function handleLogOut(){
        setIsLoggedIn(false)
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 d-none d-md-block sticky-top" style={styles}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                            placeholder="search"
                            aria-label="username"
                            aria-describedby="search"
                            onChange={handleSearch} />
                    </div>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active bg-warning text-dark" aria-current="page" style={colorMode} >
                        All Users
                    </a>
                </li>
                <li className="nav-item" onClick={handleLogOut}>
                    <a href="#" className="nav-link active bg-danger text-dark text-center mt-2" aria-current="page" style={colorMode} >
                        Logout
                    </a>
                </li>
                
                {/* <li>
                    <a href="#" className="nav-link" style={colorMode} >
                        User
                    </a>
                </li> */}
            </ul>
        </div>
    )
}

export default SideBar