import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
     const savedUsers = localStorage.getItem('users-info')
     const user = JSON.parse(savedUsers);
    return (
        <nav className='header'>
            <h3>Collaborative Task Management App</h3>
            <div className='header-container'>
                {
                    user.email?
                    <>
                    <Link to='logout'>Logout</Link>
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                        </button>
                    </div>
                    </> :
                    <>
                   <Link to='/'>Login</Link>
                    <Link to='registration'>Registration</Link> 
                    </>
                }
                
            </div>
        </nav>
    );
};

export default Header;