import React, { useEffect, useState } from 'react';
import { getUserLoginEmail } from '../../utilities/Database';

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
        <div className='flex ' style={{'justify-content': 'center'}}>

            <div>
                <h1 className='text-4xl underline'>Team Task </h1>
                {
                    teamTasks.length === 0 ?
                        <>
                            <h1>No Task Available! Good Luck Wait for New task .........</h1>

                        </> :
                        <>
                            <table className='m-10 p-2'>
                                <thead>
                                    <tr >
                                        <th>Team</th>
                                        <th>Email</th>
                                        <th>Task Title</th>
                                        <th>Description</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        teamTasks.map((item, idx) => <tr
                                            key={idx}

                                        >
                                            <td>{item.team}</td>
                                            <td>{item.email}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.start_date}</td>
                                            <td>{item.end_date}</td>

                                            <td><button className='btn bg-red-500 hover:bg-red-400 text-whiter ml-5 mr-5'>pending</button></td>

                                            <td><button className='btn bg-yellow-500 hover:bg-yellow-400 text-whiter mr-7'>progress</button></td>

                                            <td><button className='btn bg-green-500 hover:bg-green-400 text-whiter mr-7'>Complied</button></td>

                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </>
                }
            </div>
        </div>
    );
};

export default TeamTask;