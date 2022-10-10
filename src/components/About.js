import React from 'react'
import NavBar from './NavBar'
import BigContainer from './BigContainer'

function About({ darkMode, setDarkMode, showGitUser }) {
    return (
        <div>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='container' >
                <h3 className='text-center mt-5 text-warning'>About Us</h3>
                <div className='container d-flex justify-content-center align-items-center flex-column p-5'>
                <p className=''>This application utilizes the GitHub api showing the co-founders of the company alongside some
                of its earliest members. You can filter through the list as well as select individual persons as well.</p>
                <p>These people are so awesome! Be sure to check them out on their socials by clicking on the view profile button.</p>
                <p>Thank you so much for checking this application out.</p>
                </div>
                
            </div>
        </div>
    )
}

export default About