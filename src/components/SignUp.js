import React from 'react';
import Auth from './Auth';
import { Link, useNavigate } from 'react-router-dom';
// import {Link} from 

function SignUp({ darkMode, setDarkMode }) {
    const navigate = useNavigate()
    return (
        <>
            <Auth darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='container d-flex justify-content-center align-items-start login p-2 flex-column flex-wrap'>
                <form className='form-login'>
                    <h3 className='pb-4'>Sign Up</h3>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='pb-2'>Email address</label>
                        <input type="email" className="form-control" style={{ width: 500 + "px" }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <p className='m-3'>Already have an account?
                        <Link to="/login" className='p-2 text-warning'>
                        Login here
                        </Link>
                    </p>
                    <button type="submit" className="btn btn-warning mt-4" style={{ width: 100 + "px" }}>Login</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;