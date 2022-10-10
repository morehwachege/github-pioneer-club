import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSun, FaMoon } from "react-icons/fa";
import { Button, Container } from 'react-bootstrap';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import { NavLink } from 'react-router-dom';


function NavBar({ darkMode, setDarkMode }) {
    // console.log(darkMode)

    return (
        <Navbar bg={darkMode ? 'light' : 'dark'} expand="lg" sticky="top" >
            <Container>
                <Navbar.Brand href="#home">
                    <span className={darkMode ? '' : 'white-text'}>Boy-Spyce</span>
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
                        <NavLink to='/contact' className='m-2'>
                            <span className={darkMode ? '' : 'white-text'}>Contact</span>
                        </NavLink>
                    </Nav>
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <Button
                                color="link"
                                className='btn-warning ml-auto'
                                onClick={() => {
                                    setDarkMode(!darkMode);
                                    changeTheme(darkMode ? themes.light : themes.dark);
                                }}
                            >
                                <span>Switch mode {darkMode ? <FaSun /> : <FaMoon />}</span>
                            </Button>
                        )}
                    </ThemeContext.Consumer>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBar;