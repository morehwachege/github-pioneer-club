import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSun, FaMoon } from "react-icons/fa";
import { Button, Container } from 'react-bootstrap';
import { ThemeContext, themes } from '../contexts/ThemeContext';

function NavBar() {
    const [darkMode, setDarkMode] = useState(true);
    // console.log(darkMode)
    
    return (
        <Navbar bg={darkMode} expand="lg" >
            <Container>
                <Navbar.Brand href="#home">
                <span className={darkMode ? '' : 'white-text'}>Boy-Spyce</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" >
                            
                        </Nav.Link>
                        <Nav.Link href="#home" >
                            <span className={darkMode ? '' : 'white-text'}>About</span>
                        </Nav.Link>
                        <Nav.Link href="#home" >
                            <span className={darkMode ? '' : 'white-text'}>Contact</span>
                        </Nav.Link>
                        <Nav.Link href="#home" >
                            <span className={darkMode ? '' : 'white-text'}>FAQs</span>
                        </Nav.Link>
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