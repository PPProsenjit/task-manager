import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { getUserLoginEmail } from '../../utilities/Database';
const Header = () => {
    //state to manage user data and authentication
    const navigate = useNavigate();

    const email = getUserLoginEmail();
    const handleLogout = () => {
        localStorage.removeItem("user");
        //logout();
        navigate('/')
    }
    return (
        <nav className='header'>
            <h3>Collaborative Task Management App</h3>
            <div className='header-container'>

                {
                    email ?
                        <>
                            {
                                (email === "admin@gmail.com") ? <Link to='/tasks'>Employee Tasks</Link>:<Link to ="/userTasks">My tasks </Link>
                            }
                            <Link onClick={handleLogout}>Logout</Link>
                            <div className="flex items-center md:order-2">
                                <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span className="sr-only">Welcome</span>
                                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                                </button>
                            </div>
                        </> :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='registration'>Registration</Link>
                        </>
                }





            </div>
        </nav>
    );
};

export default Header;