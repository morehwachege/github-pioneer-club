import React from 'react'
const styles = {
    width: '280' + 'px',
    height: 100 + 'vh'
}

function SideBar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light d-none d-md-block" style={styles}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Sidebar</span>
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Users
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Customers
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar