import React from 'react';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='signup flex items-center justify-center bg-slate-400 '>
            <div>
                <h2 className='text-4xl'>Register</h2>
                <form className='signup-container p-10'>
                    <h6>Full Name</h6>
                    <input className='border-l-slate-400' type="text" name='name' id="name" placeholder='input your name' />
                    <h6>Email</h6>
                    <input className='border-l-slate-400' type="email" name="email" id="email" placeholder='demo@gmail.com' />
                    <h6>Password</h6>
                    <input className='border-l-slate-400' type="password" name='password' id='password' placeholder='password' />
                    <h6>Describe your self!</h6>
                    <textarea name='postContent' rows={4} cols={40} placeholder='describe'></textarea>
                    <br />
                    <input className='bg-blue-500 w-48' type="submit" value='register' />
                </form>
            </div>
        </div>
    );
};

export default SignUp;