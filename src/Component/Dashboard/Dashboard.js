import React, { useEffect, useState } from 'react';
import EmployeeTable from './EmployeeTable';
import TasksTable from './TasksTable';

const Dashboard = () => {

    const [allEmployees, setAllEmployees] = useState([])
    const [loading, setLoading] = useState(false);
    const [taskData, setTaskData] = useState(null);
    const [allTasks, setAllTasks] = useState([])

    const employee = JSON.parse(localStorage.getItem('users-info'))

    const tasks = JSON.parse(localStorage.getItem('tasks-Details'))
    // console.log(allTasks);
    // console.log(allEmployees);
    const handleAllEmployee = () => {
        //console.log(allEmployees);
        if (employee.length > 0) {
            setAllEmployees(employee)
            setAllTasks([]);
        }
        else {
            setAllEmployees(null)
        }

    }
    useEffect(() => {
        const taskDataFromStorage = localStorage.getItem('tasks-Details');
        if (taskDataFromStorage) {
            setTaskData(JSON.parse(taskDataFromStorage));
        }
        setLoading(false)
    }, [loading])

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleAllTasks = () => {
        if (taskData.length > 0) {
            setAllTasks(taskData)
            setAllEmployees([])
        }

    }

    return (
        <div className='flex'>
            <div className='w-1/12 h-screen bg-green-300 pt-5'>
                <div className='grid'>
                    <button onClick={handleAllEmployee} className='btn bg-orange-300 mb-4 text-3px p-3 rounded-lg'>Employee</button>
                    <button onClick={handleAllTasks} className='btn bg-orange-300 text-3px p-3 rounded-lg'>Assign Tasks</button>
                </div>
            </div>
            <div className='pt-5'>

                <div>
                    {allEmployees.length?<h1 className='text-4xl underline'>Employee Table</h1> : <></>}
                    {
                        allEmployees.length ? <EmployeeTable allEmployees={allEmployees}></EmployeeTable>
                            : <></>
                    }
                </div>

                <div>
                    {allTasks.length ? <h1 className='text-4xl underline'>All Employee Task</h1> : <></>}
                    {
                        allTasks.length ? <TasksTable allTasks={allTasks}></TasksTable> : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;