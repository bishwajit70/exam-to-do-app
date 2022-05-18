import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth)
        navigate('/login')
    }
    return (
        <div className='py-5 bg-purple-700 text-white'>
            <Link className='p-2' to='/'>Home</Link>

            {user ? <Link className='p-2' to='/addtask'>Add Task</Link> : ""}

            {user ? <Link onClick={() => handleSignOut()} className='p-2' to='/login'>Sign Out</Link> : <Link className='p-2' to='/login'>Login</Link>}
        </div>
    );
};

export default Navbar;