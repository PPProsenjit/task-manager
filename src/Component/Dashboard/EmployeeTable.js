import React from 'react';

const EmployeeTable = ({ allEmployees }) => {

    return (
        <div>

            <table className='m-10 p-2'>
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        allEmployees.map((item, idx) => <tr
                            key={idx}

                        >
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.description}</td>
                            <td>{item.password}</td>
                            <td><button className='btn bg-red-500 hover:bg-red-400 text-whiter ml-5 mr-5'>Delete</button></td>

                            <td><button className='btn bg-yellow-500 hover:bg-yellow-400 text-whiter mr-7'>Edit</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;