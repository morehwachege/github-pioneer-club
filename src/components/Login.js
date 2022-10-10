import React, { useContext, useState } from 'react';
import Auth from './Auth';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';



function Login({ darkMode, setDarkMode, setIsLoggedIn }) {
    const message = useContext(UserContext);
    // console.log(message);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        const loginData = {
            "email": email,
            "password": password
        }
        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(data => {
            // returns undefined if no users found
            const users = data.find(user => user.email === email && user.password === password)
            // console.log(!users  ? 'user is undefined' : users)
        })
    }

    return (
        <>
            <Auth darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='container d-flex justify-content-center align-items-start login p-2 flex-column flex-wrap'>
                <form className='form-login' method='POST'>
                    <h3 className='pb-4'>Login</h3>
                    <div className="form-group">
                        <label htmlFor="email1" className='pb-2'>Email address</label>
                        <input type="email" className="form-control" style={{ width: 500 + "px" }} name='email' id="email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password1">Password</label>
                        <input type="password" className="form-control"
                            id="Password1" placeholder="Password"
                            name='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p className='m-3'>Don't have an account?
                        <Link to="/signup" className='p-2 text-warning'>
                            Create one here here
                        </Link>
                    </p>
                    <button type="submit" className="btn btn-warning mt-4" style={{ width: 100 + "px" }} onClick={handleLogin}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login