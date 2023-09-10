import React from 'react';

const EmployeeTable = ({ allEmployees }) => {

    return (
        <div>

            <table className='m-10 p-2'>
                <thead>
                    <tr >
                        <th >Team</th>
                        <th className='pl-10 '>Name</th>
                        <th className='pl-10 '>Email</th>
                        <th className='pl-10 '>Description</th>
                        <th className='pl-10 '>password</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        allEmployees.map((item, idx) => <tr
                            key={idx}

                        >
                            <td>{item.team}</td>
                            <td className='pl-10 '>{item.name}</td>
                            <td className='pl-10 '>{item.email}</td>
                            <td className='pl-10 '>{item.details}</td>
                            <td className='pl-10 '>{item.password}</td>
                            <td className='pl-10 '><button className='btn bg-red-500 hover:bg-red-400 text-whiter ml-5 mr-5 p-2'>Delete</button></td>

                            <td><button className='btn bg-yellow-500 hover:bg-yellow-400 text-whiter mr-7 p-2'>Edit</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;