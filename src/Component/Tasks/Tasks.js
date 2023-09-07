import React, { useState } from 'react';

const Tasks = () => {


    const [date, setDate] = useState(" ");
    const [endDate, setEndDate] = useState("");
    return (
        <div className='bg-green-500 max-w-md'>
            <h1 className='text-2xl'>Add Tasks for all </h1>
            <form >
                <div>
                    <label>Employee Email</label>
                    <input className='m-4 rounded-sm border ' type="email" placeholder='inter email ' />
                </div>
                <div>
                    <label>Task name</label>
                    <input className='m-4 rounded-sm border ' type="text" placeholder='item name' />
                </div>
                <div className='flex items-center pl-20'>
                    <label>Description</label>
                    <textarea className='rounded-sm border ' type="text" placeholder='Description' />
                </div>
                <label>Default Section</label>
                <div>
                    <label>Start Date</label>
                    <input className='ml-4'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                    />
                </div>
                <div>
                    <br />
                    <label > End Date</label>
                    <input className='ml-5'
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        type="date"
                    />
                </div>
                <input className='m-4 rounded-sm border ' type="text" placeholder='item name' />
            </form>
        </div>

    );
};

export default Tasks;