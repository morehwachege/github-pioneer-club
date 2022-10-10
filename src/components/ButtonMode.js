import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { Button, Container } from 'react-bootstrap';

function ButtonMode({handleModeChange, darkMode}) {
    return (
        <>
            <Button
                color="link"
                className='btn-warning ml-auto'
                onClick={handleModeChange}
            >
                <span>Switch mode {darkMode ? <FaSun /> : <FaMoon />}</span>
            </Button>
        </>
    )
}

export default ButtonMode