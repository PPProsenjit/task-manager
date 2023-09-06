import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h3>Collaborative Task Management App</h3>
            <div className='header-container'>
                <Link to ='login'>Login</Link>
                <Link to = 'registration'>Registration</Link>
                <Link to = 'logout'>Logout</Link>
            </div>
        </nav>
    );
};

export default Header;