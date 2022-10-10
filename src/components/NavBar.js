import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import { NavLink } from 'react-router-dom';
import ButtonMode from './ButtonMode';


function NavBar({ darkMode, setDarkMode }) {
    // console.log(darkMode)
    // function handleModeChange() {
    //     setDarkMode(!darkMode);
    //     changeTheme(darkMode ? themes.light : themes.dark);
    // }

    return (
        <Navbar bg={darkMode ? 'light' : 'dark'} expand="lg" sticky="top" >
            <Container>
                <Navbar.Brand href="#home">
                    <span className={darkMode ? '' : 'white-text'}>GitHub Pioneer Club</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to='/' className='m-2' >
                            <span className={darkMode ? '' : 'white-text'}>Home</span>
                        </NavLink>

                        <NavLink to='/about' className='m-2'>
                            <span className={darkMode ? '' : 'white-text'}>About</span>
                        </NavLink>
                        {/* <NavLink to='/contact' className='m-2'>
                            <span className={darkMode ? '' : 'white-text'}>Contact</span>
                        </NavLink> */}
                    </Nav>
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <ButtonMode handleModeChange={() => {
                                setDarkMode(!darkMode);
                                changeTheme(darkMode ? themes.light : themes.dark);
                            }} darkMode={darkMode} />
                        )}
                    </ThemeContext.Consumer>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBar;