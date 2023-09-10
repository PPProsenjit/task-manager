import React from 'react';
import './SignUp.css'
import { addToDb } from '../../utilities/Database';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    const handleRegister = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const team = event.target.team.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const details = event.target.details.value;
        addToDb(team,name,email,password,details, navigate);
    }
    return (
        <div  className='signup flex items-center h-screen justify-center bg-slate-400 '>
            <div>
                <h2 className='text-4xl'>Register</h2>
                <form onSubmit={handleRegister } className='signup-container p-10'>
                     <h6 className='text-3xl'>Team</h6>
                        <select id="team" name="team" type="team"  className="border-l-slate-400 h-9 w-[310px]" required>
                            <option>blue</option>
                            <option>gray</option>
                            <option>black</option>
                            <option>White</option>
                            <option>purple</option>
                        </select>
                    
                    <h6 className='text-3xl'>Full Name</h6>
                    <input className='border-l-slate-400 h-9 w-[310px]' type="text" name='name' id="name" placeholder='input your name' required/>
                    <h6 className='text-3xl'>Email</h6>
                    <input className='border-l-slate-400 h-9 w-[310px]' type="email" name="email" id="email" placeholder='demo@gmail.com' required/>
                    <h6 className='text-3xl'>Password</h6>
                    <input className='border-l-slate-400 h-9 w-[310px]' type="password" name='password' id='password' placeholder='password' required/>
                    <h6 className='text-3xl'>Describe yourself!</h6>
                    <textarea name='details' rows={2} cols={40} placeholder='describe' required></textarea>
                    <br />
                    <input className='bg-blue-500 h-9 w-[310px] mt-4 rounded-md text-3xl' type="submit" value='register' />
                    <h2 className='text-xl'>Already have an account <Link className='underline' to="/login"> Sign in</Link></h2>
                </form>
            </div>
          
        </div>
    );
};

export default SignUp;