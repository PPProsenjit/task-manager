import React from 'react';
import './SignUp.css'
import { addToDb } from '../../utilities/Database';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const handleRegister = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const details = event.target.details.value;
        addToDb(name,email,password,details);
    }
    return (
        <div  className='signup flex items-center justify-center bg-slate-400 '>
            <div>
                <h2 className='text-4xl'>Register</h2>
                <form onSubmit={handleRegister } className='signup-container p-10'>
                    <h6>Full Name</h6>
                    <input className='border-l-slate-400' type="text" name='name' id="name" placeholder='input your name' required/>
                    <h6>Email</h6>
                    <input className='border-l-slate-400' type="email" name="email" id="email" placeholder='demo@gmail.com' required/>
                    <h6>Password</h6>
                    <input className='border-l-slate-400' type="password" name='password' id='password' placeholder='password' required/>
                    <h6>Describe your self!</h6>
                    <textarea name='details' rows={2} cols={40} placeholder='describe' required></textarea>
                    <br />
                    <input className='bg-blue-500 w-48 mt-4' type="submit" value='register' />
                    <h2>Already have an account <Link className='underline' to="/login"> Sign in</Link></h2>
                </form>
            </div>
          
        </div>
    );
};

export default SignUp;