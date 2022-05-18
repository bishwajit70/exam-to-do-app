import React, { useEffect, useState } from 'react';
import SingleTask from './SingleTask';

const Home = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const url = 'https://fast-brook-80664.herokuapp.com/tasks';
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])


    // deleting task from the database 
    const handleDelete = (id) => {
        console.log(id)

        const proceed = window.confirm('Are you sure to delete the Task?');
        if (proceed) {
            const url = `https://fast-brook-80664.herokuapp.com/tasks/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingTasks = tasks.filter(task => task._id !== id)
                        setTasks(remainingTasks);
                    }

                });
        }

    }


    return (
        <div>
            {
                tasks.map(task => <SingleTask
                    key={task._id}
                    task={task}
                    handleDelete={handleDelete}
                // handleComplete={handleComplete}
                ></SingleTask>)
            }
        </div>
    );
};

export default Home;