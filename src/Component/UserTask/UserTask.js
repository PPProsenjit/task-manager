import React, { useEffect, useState } from 'react';
import { getUserLoginEmail } from '../../utilities/Database';

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
        <div className='flex ' style={{'justify-content': 'center'}}>
            
           <div>
           <h1 className='text-4xl underline'>My Task</h1>
           {
                userTasks.length === 0 ?
                    <>
                        <h1>No Task Available! Good Luck Wait for New task .........</h1>
                       
                    </> :
                    <>
                        <table className='m-10 p-2'>
                            <thead>
                                <tr >
                                    <th>Team</th>
                                    <th className='pl-10 '>Email</th>
                                    <th className='pl-10 '>Task Title</th>
                                    <th className='pl-10 '>Description</th>
                                    <th className='pl-10 '>Start Date</th>
                                    <th className='pl-10 '>End Date</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    userTasks.map((item, idx) => <tr
                                        key={idx}

                                    >
                                        <td >{item.team}</td>
                                        <td className='pl-10 '>{item.email}</td>
                                        <td className='pl-10 '>{item.title}</td>
                                        <td className='pl-10 '>{item.description}</td>
                                        <td className='pl-10 '>{item.start_date}</td>
                                        <td className='pl-10 '>{item.end_date}</td>

                                        <td><button className='btn bg-red-500 hover:bg-red-400 text-whiter ml-5 mr-5 p-2'>pending</button></td>

                                        <td><button className='btn bg-yellow-500 hover:bg-yellow-400 text-whiter mr-7 p-2'>progress</button></td>

                                        <td><button className='btn bg-green-500 hover:bg-green-400 text-whiter mr-7 p-2'>Complied</button></td>

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

export default UserTask;