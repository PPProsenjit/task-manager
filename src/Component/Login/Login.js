import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginFromDb } from '../../utilities/Database';

const Login = () => {
    const navigate = useNavigate();
    const handelLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        loginFromDb(email,password ,navigate);
        console.log(loginFromDb(email,password ,navigate));
    }
    return (
        <div className='signup flex items-center justify-center bg-slate-400 '>
            <div>
                <h2 className='text-4xl'>Login</h2>
                <form onSubmit={handelLogin} className='signup-container p-10 '>
                    <h6>Email</h6>
                    <input className='border-l-slate-400' type="email" name="email" id="email" placeholder='demo@gmail.com' required />
                    <h6>Password</h6>
                    <input className='border-l-slate-400' type="password" name='password' id='password' placeholder='password' required/>
                    <br />
                    <input className='bg-blue-500 w-40 m-5' type="submit" value='Login' />
                    <h2>create new account <Link className='underline' to="/registration"> Sign up</Link></h2>
                </form>
                
                
            </div>
        </div>
    );
};

export default Login;