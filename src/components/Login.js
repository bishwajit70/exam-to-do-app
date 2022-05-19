import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        createUserError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleSignInWithEmailPassword = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password)
    }

    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        alert('Give your email address')

    }

    let from = location.state?.from?.pathname || "/";

    if (user || gUser) {
        navigate(from, { replace: true });
        // navigate('/')
    }

    if (loading || sending) {
        return <Loading></Loading>
    }


    return (
        <div className='md:w-3/4 lg:w-6/12 border-2 rounded-md shadow-xl p-10 mt-10  mx-auto'>
            <div>
                <form onSubmit={handleSignInWithEmailPassword} className='mt-6 mx-auto lg:w-full xl:w-10/12'>
                    <input onBlur={handleEmailBlur} type="email" name='email' placeholder="Email Address" className="input input-bordered w-full " />
                    <input onBlur={handlePasswordBlur} type="password" name='password' placeholder="Password" className="mt-6 input input-bordered w-full " />
                    <button type='submit' className="btn w-full uppercase my-6 btn-primary" >Login</button>
                </form>
                <p className='text-xl'>Don't have an account? <Link className='text-blue-700 text-xl' to='/signup'>Sign Up</Link></p>
            </div>
            <div>
                <p>Forget Password? <button onClick={(handleResetPassword)}>Reset Passowrd</button></p>
            </div>
            <button onClick={() => signInWithGoogle()} className="btn uppercase my-6 btn-primary mx-auto w-full md:w-full md:w-full xl:w-10/12" >Signin With Google</button>
        </div>
    );
};

export default Login;