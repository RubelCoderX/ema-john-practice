import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
        const [error, setError] = useState('');
        const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm)

        if(password !== confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 characters or longer')
            return
        }
      }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required placeholder='Your Email'/>
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required placeholder='Your Password'/>
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm" id="" required placeholder='Your Password'/>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p className='new-ema'>New to Ema-john?<Link className='link' to='/login'>Login</Link></p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;