import React, { useEffect, useState } from 'react';
import { addToTasks } from '../../utilities/Database';
import TaskCart from '../Task_Cart/TaskCart';

const Tasks = () => {
    const [startDate, setStartDate] = useState(" ");
    const [endDate, setEndDate] = useState("");

    const [loading, setLoading] = useState(false);
    const [taskData, setTaskData] = useState(null);

    useEffect(() => {
        const taskDataFromStorage  = localStorage.getItem('tasks-Details');
        if (taskDataFromStorage ) {
            setTaskData(JSON.parse(taskDataFromStorage));
        }
        setLoading(false)
    }, [loading])

    const handleTaskManager = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const title = event.target.title.value;
        const description = event.target.description.value;
        const start_date = event.target.start_date.value;
        const end_date = event.target.end_date.value;
        addToTasks(email, title, description, start_date, end_date);
        setLoading(true)

    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex'>
            <div className='bg-green-500 w-1/4 h-screen'>
                <h1 className='text-2xl'>Add Tasks</h1>
                <form onSubmit={handleTaskManager}>
                    <div className='w-fll'>
                        <label className='text-3xl'>Email</label>
                        <input className='m-4 rounded-sm border ' name='email' type="email" placeholder='Employee email ' required />
                    </div>
                    <div>
                        <label className='text-3xl'>Task Title</label>
                        <input className='m-4 rounded-sm border ' name='title' type="text" placeholder='task title' required />
                    </div>
                    <div className='flex items-center ml-12 w-full mb-10'>
                        <label className='text-3xl'>Description</label>
                        <textarea className='rounded-sm border w-[185px]' name='description' type="text" placeholder='Description' required />
                    </div>
                    <div>
                        <label className='text-3xl'>Start Date</label>
                        <input name='start_date' className='ml-2'
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            type="date"
                            required
                        />
                    </div>
                    <div>
                        <br />
                        <label className='text-3xl'> End Date</label>
                        <input name='end_date' className='ml-5'
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            type="date"
                            required
                        />
                    </div>
                    <input className='m-4 rounded-sm border w-40 bg-red-400' type="submit" name='submit' />
                </form>

            </div>
            <div >
                {taskData ? (
                    <TaskCart taskData={taskData}></TaskCart>
                ) : (
                    <div className='flex text-center bg-red-600 text-white'>No task data available..........</div>
                )}
            </div>
        </div>

    );  
};

export default Tasks;