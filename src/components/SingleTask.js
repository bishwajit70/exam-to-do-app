import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const SingleTask = (props) => {
    const { _id, taskname, description } = props.task;
    const handleDelete = props.handleDelete

    const [completeTask, setCompleteTask] = useState({})


    const handleComplete = (id) => {
        console.log(id);
        const url = `https://fast-brook-80664.herokuapp.com/tasks/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCompleteTask(data));
        alert('Task has  been completed')
    }

    return (
        <div className=''>

            <div className='bg-purple-300 p-5 rounded-lg'>
                <h2 className='text-2xl py-2' >{taskname}</h2>
                <h2>{description}</h2>
            </div>
            <div className='mt-5 grid grid-cols-1 justify-center items-center'>
                <button className='p-5 rounded-lg bg-red-300' onClick={() => handleComplete(_id)}>Complete</button>
                <button className='p-5 mt-5 rounded-lg bg-red-500' onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default SingleTask;