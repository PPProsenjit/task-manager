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
            <div className='bg-green-400 w-1/4 h-screen text-white '>
                <h1 className='text-4xl underline pt-5 text-white mb-5'>Add Tasks</h1>
                <form onSubmit={handleTaskManager} className='pt-10px'>

                    <div className="">
                        <label className=" text-3xl ">Team</label>
                        <select id="team" name="team" type="team" className="mt-2 rounded-xl border p-2 pl-10 pr-5 text-2xl w-full text-black" >
                            <option>blue</option>
                            <option>gray</option>
                            <option>black</option>
                            <option>White</option>
                            <option>purple</option>
                        </select>
                    </div>
                    <div className='w-fll'>
                        <label className='text-3xl'>Email</label>
                        <input className='mt-2 border p-2 w-full rounded-xl' name='email' type="email" placeholder='Employee email ' required />
                    </div>
                    <div>
                        <label className='text-3xl'>Task Title</label>
                        <input className='border p-2  w-full rounded-xl' name='title' type="text" placeholder='task title' required />
                    </div>
                    <div >
                        <label className='text-3xl'>Description</label>
                        <textarea className=' border rounded-xl w-full' name='description' type="text" placeholder='Description' required />
                    </div>
                    <div className='flex ' >
                        <div>
                            <label className='text-3xl'>Start Date</label>
                            <input name='start_date' className='ml-2 p-2 text-gray-800'
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                type="date"
                                required
                            />
                        </div>
                        <div>
                            <label className='text-3xl'> End Date</label>
                            <input name='end_date ' className='ml-2 p-2 text-gray-800'
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                type="date"
                                required
                            />
                        </div>
                    </div>
                    <input className='m-4 rounded-xl border w-40 bg-red-400 p-2 hover:border-l-indigo-300' type="submit" name='submit' />
                </form>

            </div>
            <div className='flex' style={{ 'justify-content': 'center' }}>
                <div>
                    <h1 className='text-4xl underline mt-5'>Task table</h1>
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