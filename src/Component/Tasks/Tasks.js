import React, { useState } from 'react';
import { addToTasks } from '../../utilities/Database';

const Tasks = () => {


    const [date, setDate] = useState(" ");
    const [endDate, setEndDate] = useState("");

    const handleTaskManager = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const title = event.target.title.value;
        const description = event.target.description.value;
        const date = event.target.date.value;
        const end_date = event.target.end_date.value;
        addToTasks(email, title, description, date, end_date);

    }
    return (
        <div className='bg-green-500 max-w-md'>
            <h1 className='text-2xl'>Add Tasks for all </h1>
            <form onSubmit={handleTaskManager}>
                <div>
                    <label>Employee Email</label>
                    <input className='m-4 rounded-sm border ' name='email' type="email" placeholder='inter email ' required />
                </div>
                <div>
                    <label>Task name</label>
                    <input className='m-4 rounded-sm border ' name='title' type="text" placeholder='task title' required/>
                </div>
                <div className='flex items-center pl-20'>
                    <label>Description</label>
                    <textarea className='rounded-sm border ' name='description' type="text" placeholder='Description' required/>
                </div>
                <label>Default Section</label>
                <div>
                    <label>Start Date</label>
                    <input name='date' className='ml-4'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        required
                    />
                </div>
                <div>
                    <br />
                    <label > End Date</label>
                    <input name='end_date' className='ml-5'
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        type="date"
                        required
                    />
                </div>
                <input className='m-4 rounded-sm border w-40 bg-red-400' type="submit" name ='submit'  />
            </form>
        </div>

    );
};

export default Tasks;