import React from 'react';

const TasksTable = ({allTasks}) => {
    return (
        <div>

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
                        allTasks.map((item, idx) => <tr
                            key={idx}

                        >
                            <td>{item.team}</td>
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
        </div>
    );
};

export default TasksTable;