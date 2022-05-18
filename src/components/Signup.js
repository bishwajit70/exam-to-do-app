import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswoardError] = useState('')
    const navigate = useNavigate()
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            // setPasswoardError('Your two Passwords not matched')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    // if (loading) {
    //     return <Loading></Loading>
    // }
    if (user) {
        navigate('/');
    }

    return (
       <div className='w-5/12 border-2 rounded-md shadow-xl p-10 mt-10  mx-auto'>
            <form onSubmit={handleCreateUser} className='mt-6 mx-auto w-9/12'>
                <input onBlur={handleEmailBlur} type="email" name='email' placeholder="Email Address" className="input input-bordered w-full " />
                <input onBlur={handlePasswordBlur} type="password" name='password' placeholder="Password" className="mt-6 input input-bordered w-full " />
                <input onBlur={handleConfirmPasswordBlur} type="password" name='ConfirmPassword' placeholder="Confirm Password" className="mt-6 input input-bordered w-full " />
                <button type='submit' className="btn w-full uppercase mt-6 btn-primary" >Signup</button>

            </form>
            <p className='text-xl'>Already have an account? <Link className='text-blue-700 text-xl' to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;