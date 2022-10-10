import React from 'react';
import ButtonMode from './ButtonMode';
import { ThemeContext, themes } from '../contexts/ThemeContext';


function Auth({ darkMode, setDarkMode }) {
    return (
        <>
            <div className='container-fluid d-flex justify-content-center align-items-center p-4'>
                {/* <NavBar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
                <header className='container d-flex justify-content-end'>
                    <ThemeContext.Consumer>

                        {({ changeTheme }) => (
                            <ButtonMode handleModeChange={() => {
                                setDarkMode(!darkMode);
                                changeTheme(darkMode ? themes.light : themes.dark);
                            }} darkMode={darkMode} />
                        )}

                    </ThemeContext.Consumer>
                </header>
                
            </div>
        </>
    )
}

export default Auth