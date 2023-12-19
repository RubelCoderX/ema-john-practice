import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required placeholder='Your Email'/>
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required placeholder='Your Password'/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p className='new-ema'>New to Ema-john?<Link className='link' to='/signup'> Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;