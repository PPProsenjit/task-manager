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
    }
    return (
        <div className='signup flex h-screen items-center justify-center bg-slate-400 mb-0'>
            <div>
                <h2 className='text-4xl'>Login</h2>
                <form onSubmit={handelLogin} className='signup-container p-10 '>
                    <h6 className='text-3xl'>Email</h6>
                    <input className='border-l-slate-400 h-9 w-[310px]' type="email" name="email" id="email" placeholder='demo@gmail.com' required />
                    <h6 className='text-3xl'>Password</h6>
                    <input className='border-l-slate-400 h-9 w-[310px]' type="password" name='password' id='password' placeholder='password' required/>
                    <br />
                    <input className='bg-blue-500 m-5 h-9 w-[310px] rounded-md' type="submit" value='Login' />
                    <h2 className='text-xl'>create new account <Link className='underline' to="/registration"> Sign up</Link></h2>
                </form>
                
                
            </div>
        </div>
    );
};

export default Login;