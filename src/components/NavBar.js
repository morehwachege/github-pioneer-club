import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSun, FaMoon } from "react-icons/fa";
import { Button, Container } from 'react-bootstrap';
import { ThemeContext, themes } from '../contexts/ThemeContext';

function NavBar() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <Navbar bg={darkMode} expand="lg">
            <Container>
                <Navbar.Brand href="#home">Boy-Spyce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">FAQs</Nav.Link>
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