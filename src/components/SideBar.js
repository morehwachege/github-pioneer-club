import React from 'react'

function SideBar({ darkMode }) {
    const styles = {
        width: '280' + 'px',
        height: '100vh',
        backgroundColor: darkMode ? '#f2f2f2' : 'black',
        color: darkMode ? 'black' : 'white',
        zIndex: 2
    }
    const colorMode = { color: darkMode ? 'black' : '#f2f2f2' }
    function handleSearch(e){
        console.log(e.target.value);
    }
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 d-none d-md-block sticky-top" style={styles}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="here" aria-label="username" aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2">search</span>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page" style={colorMode} >
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link" style={colorMode} >
                        Users
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link" style={colorMode} >
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link" style={colorMode} >
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link" style={colorMode} >
                        Customers
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar