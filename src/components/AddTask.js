import React from 'react';

const AddTask = () => {

    const handleAddTask = event => {
        event.preventDefault()
        const taskname = event.target.task.value;
        const description = event.target.description.value;
        const tasks = { taskname, description };
        console.log(tasks);

        fetch('https://fast-brook-80664.herokuapp.com/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("My task Added Successfully.");
                event.target.reset();
            })
    }

    return (
        <div className='lg:w-8/12 border-2 rounded-md shadow-xl p-10 mt-10  mx-auto'>
            <form onSubmit={handleAddTask} className='mt-6 mx-auto lg:w-full xl:w-9/12'>
                <input type="text" name='task' placeholder="Task Name" className="input input-bordered w-full " />
                <input type="text" name='description' placeholder="Description" className="mt-6 input input-bordered w-full " />
                <button type='submit' className="btn w-full uppercase mt-6 btn-primary" >Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;