import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { getUserLoginEmail } from '../../utilities/Database';
import DialogPage from '../Dialog/DialogPage';
const Header = () => {
    //state to manage user data and authentication

    const [singleUser, setSingleUser] = useState([])
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    //get login user email
    const email = getUserLoginEmail();
    const getUserInfo = JSON.parse(localStorage.getItem('users-info'))
    // console.log(getUserInfo);
    useEffect(() => {
        if (getUserInfo?.length > 0) {
            const user = getUserInfo.find(loginUser => loginUser.email === email)

            setSingleUser(user);
        }

    }, [])

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

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
                            <h3>welcome! {singleUser.name}</h3>
                            {
                                (email === "admin@gmail.com") ?
                                   <> <Link to='/tasks'>Employee Tasks</Link>
                                   <Link to='/dashboard'>Dashboard</Link>
                                   </>
                                    :
                                    <>
                                    <Link to="/teamTask">Team Task</Link>
                                    <Link to="/userTask">My tasks </Link>
                                    
                                    </>
                            }

                            <Link className='pr-4' onClick={handleLogout}>Logout</Link>
                            <div className="flex items-center md:order-2">
                                <button onClick={() => handleClickOpen()} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"  >
                                    <img className={`w-8 h-8 rounded-full `} src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                                </button>
                            </div>
                        </> :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='registration'>Registration</Link>
                        </>
                }

            </div>
            {
                open && 
                <DialogPage
                open ={open}
                handleClose = {handleClose}
                ></DialogPage>
            }
        </nav>
    );
};

export default Header;