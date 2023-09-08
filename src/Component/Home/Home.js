import React from 'react';
import Login from '../Login/Login';
import { getUserLoginEmail } from '../../utilities/Database';
import UserTask from '../UserTask/UserTask';
import Tasks from '../Tasks/Tasks';

const Home = () => {
  const userEmail = getUserLoginEmail()
  return (
    <div>
      {
        userEmail ?
          <>
            {
              (userEmail === "admin@gmail.com") ? <Tasks></Tasks> : <UserTask></UserTask>
            }
          </>
          :
          <Login></Login>
      }

    </div>
  );
};

export default Home;