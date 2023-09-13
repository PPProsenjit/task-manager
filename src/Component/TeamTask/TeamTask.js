import React, { useEffect, useState } from 'react';
import { getUserLoginEmail } from '../../utilities/Database';
import TaskCart from '../Task_Cart/TaskCart';

const TeamTask = () => {
    //get user
    const [userDetails, setUserDetails] = useState([])
    //get task
    const [tasks, setTasks] = useState([]);
    //set team wise task
    const [teamTasks, setTeamTasks] = useState([]);
    //get login user email
    const userEmail = getUserLoginEmail();
    const getUserInfo = JSON.parse(localStorage.getItem('users-info'))
    //load task data from local Storage
    const getUsersTask = JSON.parse(localStorage.getItem('tasks-Details'))
    //console.log(tasks);
    useEffect(() => {
        if (getUsersTask) {
            setTasks(getUsersTask)
        }
    }, [])
    //user info
    useEffect(() => {
        if (getUserInfo.length > 0) {
            const user = getUserInfo.find(loginUser => loginUser.email === userEmail)
            setUserDetails(user);
        }

    }, [])
    // console.log(teamTasks);

    useEffect(() => {
        const teamName = userDetails.team;

        if (userDetails) {
            const teamTasks = tasks.filter(task => task.team === teamName)
            if (teamTasks.length > 0) {
                setTeamTasks(teamTasks);
            }
            else {

                setTeamTasks([]);
            }
        }
    }, [tasks])
    //console.log(teamTasks);
    return (
        <div className='flex ' style={{ 'justifyContent': 'center' }}>

            <div>
                {
                    teamTasks.length ?
                        <>
                            <h1 className='text-4xl underline'>Team Task</h1>
                            {
                                <TaskCart taskData={teamTasks}></TaskCart>
                            }
                        </> :
                        <>
                            <h1 className='text-red-500'>No Task Available! Good Luck Wait for New task .........</h1>

                        </>
                }
            </div>
        </div>
    );
};

export default TeamTask;