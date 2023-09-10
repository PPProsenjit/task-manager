import React, { useEffect, useState } from 'react';
import { addToTasks } from '../../utilities/Database';
import TaskCart from '../Task_Cart/TaskCart';

const Tasks = () => {
    const [startDate, setStartDate] = useState(" ");
    const [endDate, setEndDate] = useState("");

    const [loading, setLoading] = useState(false);
    const [taskData, setTaskData] = useState(null);

    useEffect(() => {
        const taskDataFromStorage = localStorage.getItem('tasks-Details');
        if (taskDataFromStorage) {
            setTaskData(JSON.parse(taskDataFromStorage));
        }
        setLoading(false)
    }, [loading])

    const handleTaskManager = (event) => {
        event.preventDefault();
        const team = event.target.team.value;
        const email = event.target.email.value;
        const title = event.target.title.value;
        const description = event.target.description.value;
        const start_date = event.target.start_date.value;
        const end_date = event.target.end_date.value;
        addToTasks(team, email, title, description, start_date, end_date);
        setLoading(true)

    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex'>
            <div className='bg-green-500 w-1/4 h-screen'>
                <h1 className='text-4xl underline'>Add Tasks</h1>
                <form onSubmit={handleTaskManager} className='pt-10px'>

                    <div className=" w-fll">
                        <label className=" text-3xl text-gray-700">Team</label>
                        <select id="team" name="team" type="team" className="m-6 rounded-sm border p-2 pl-10 pr-5 text-center" >
                            <option>blue</option>
                            <option>gray</option>
                            <option>black</option>
                            <option>White</option>
                            <option>purple</option>
                        </select>
                    </div>
                    <div className='w-fll'>
                        <label className='text-3xl'>Email</label>
                        <input className='m-4 rounded-sm border p-2' name='email' type="email" placeholder='Employee email ' required />
                    </div>
                    <div>
                        <label className='text-3xl'>Task Title</label>
                        <input className='m-4 rounded-sm border p-2' name='title' type="text" placeholder='task title' required />
                    </div>
                    <div className='flex items-center ml-12 w-full mb-2'>
                        <label className='text-3xl'>Description</label>
                        <textarea className='rounded-sm border m-4 w-[185px]' name='description' type="text" placeholder='Description' required />
                    </div>
                    <div>
                        <label className='text-3xl'>Start Date</label>
                        <input name='start_date' className='ml-2 p-2'
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            type="date"
                            required
                        />
                    </div>
                    <div>
                        <br />
                        <label className='text-3xl'> End Date</label>
                        <input name='end_date' className='ml-5 p-2'
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            type="date"
                            required
                        />
                    </div>
                    <input className='m-4 rounded-sm border w-40 bg-red-400 p-2 hover:border-l-indigo-300' type="submit" name='submit' />
                </form>

            </div>
            <div className='flex' style={{ 'justify-content': 'center' }}>
                <div>
                    {taskData ? (
                        <TaskCart taskData={taskData}></TaskCart>
                    ) : (
                        <div className='flex text-center bg-red-600 text-white'>No task data available..........</div>
                    )}
                </div>

            </div>
        </div>

    );
};

export default Tasks;