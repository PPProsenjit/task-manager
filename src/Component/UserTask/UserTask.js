import React, { useEffect, useState } from 'react';
import { getUserLoginEmail } from '../../utilities/Database';
import TaskCart from '../Task_Cart/TaskCart';

const UserTask = () => {
    const [tasks, setTasks] = useState([]);

    const [userTasks, setUserTasks] = useState([]);

    const getUsersTask = JSON.parse(localStorage.getItem('tasks-Details'))
    //console.log(tasks);
    useEffect(() => {
        if (getUsersTask) {
            setTasks(getUsersTask)
        }
    }, [])

    useEffect(() => {

        const storeEmail = getUserLoginEmail()
        if (storeEmail) {
            const savedTasks = tasks.filter(task => task.email === storeEmail)
            if (savedTasks.length > 0) {
                setUserTasks(savedTasks);
            }
            else {

                setUserTasks([]);
            }
        }
    }, [tasks])


    return (
        <div className='flex ' style={{ 'justifyContent': 'center' }}>

            <div>
                {
                    userTasks ?
                        <>
                            <h1 className='text-4xl underline'>My Task</h1>
                          {
                            <TaskCart taskData={ userTasks}></TaskCart>
                          }
                        </>
                        :
                        <>
                            <h1 className='text-red-500'>No Task Available! Good Luck Wait for New task .........</h1>

                        </>

                }
            </div>
        </div>
    );
};

export default UserTask;