import React from 'react'

function SideBar({ darkMode }) {
    const styles = {
        width: '280' + 'px',
        height: 100 % + '',
        backgroundColor: darkMode ? '#f2f2f2' : 'black',
        color: darkMode ? 'black' : 'white'
    }
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 d-none d-md-block" style={styles}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page" style={{color: darkMode ? '' : 'white-text'}} >
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link" style={{color: darkMode ? 'black' : '#f2f2f2'}} >
                        Users
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link" style={{color: darkMode ? 'black' : '#f2f2f2'}} >
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link" style={{color: darkMode ? 'black' : '#f2f2f2'}} >
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link" style={{color: darkMode ? 'black' : '#f2f2f2'}} >
                        Customers
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar