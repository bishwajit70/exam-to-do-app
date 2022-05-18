import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const SingleTask = (props) => {
    const { _id, taskname, description } = props.task;
    const handleDelete = props.handleDelete

    const [completeTask, setCompleteTask] = useState({})

    
    const handleComplete = (id) => {
        console.log(id);
        const url = `http://localhost:5000/tasks/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCompleteTask(data));
        alert('Task has  been completed')
    }

    return (
        <div className='flex items-center w-6/12 mx-auto py-5  justify-between'>
            <div className='text-left w-3/4 mr-5 p-2 bg-purple-300'>
                <h2 className='text-2xl py-2' >{taskname}</h2>
                <h2>{description}</h2>
            </div>
            <div className='flex w-1/4 items-center justify-center'>
                <button className='p-5 mr-5 bg-red-200' onClick={() => handleComplete(_id)}>Complete</button>
                <button className='p-5 bg-red-500' onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default SingleTask;