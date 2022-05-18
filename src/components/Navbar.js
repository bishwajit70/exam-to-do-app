import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='py-5 bg-purple-700 text-white'>
            <Link className='p-2' to='/'>Home</Link>

            {user ? <Link className='p-2' to='/addtask'>Add Task</Link> : ""}
            <Link className='p-2' to='/login'>Login</Link>
        </div>
    );
};

export default Navbar;