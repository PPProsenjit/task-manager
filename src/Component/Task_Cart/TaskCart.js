import React from 'react';

const TaskCart = ({taskData}) => {
    return (
        <table className='m-10 p-2'>
            <thead>
                <tr >
                    <th>Email</th>
                    <th>Task Title</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody >
                {
                    taskData.map((item, idx) => <tr
                        key={idx}
                        
                    >
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
    );
};

export default TaskCart;