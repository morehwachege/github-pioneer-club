import React, { useContext, useEffect, useState } from 'react';
import Auth from './Auth';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
// import {Link} from 

function SignUp({ darkMode, setDarkMode }) {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUsers, setCurrentUsers] = useState([]);
    const navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();
        fetch("http://localhost:4000/users")
            .then(res => res.json())
            .then(data => {
                setCurrentUsers(data)
            })
        const postData = {
            "email": email,
            "password": password
        }

        const filteredData = currentUsers.find(user => user.email === postData.email);
        console.log(filteredData ? "Something came" : "nothing came back")
        if (!filteredData) {
            // only post if there is no such data in the server
            fetch("http://localhost:4000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(postData)
            })
            .then(res => res.json())
            .then( data => {
                console.log(data)
            })
        }


    }
    // console.log(currentUsers)
    return (
        <>
            <Auth darkMode={darkMode} setDarkMode={setDarkMode} />
            <h4 className='text-center'>GitHub Pioneers' Club</h4>
            <div className='container d-flex justify-content-center align-items-start login flex-column flex-wrap'>
                <form className='form-login' method='POST'>
                    <h3 className='pb-4'>Sign Up</h3>
                    <div className="form-group">
                        <label htmlFor="email1" className='pb-2'>Email address</label>
                        <input type="email" className="form-control" style={{ width: 500 + "px" }} id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            name='email'
                            onChange={e => setEmail(e.target.value)}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Password</label>
                        <input type="password" className="form-control" id="password1"
                            placeholder="Password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <p className='m-3'>Already have an account?
                        <Link to="/login" className='p-2 text-warning'>
                            Login here
                        </Link>
                    </p>
                    <button type="submit" className="btn btn-warning mt-4" style={{ width: 100 + "px" }} onClick={handleSignUp}>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;