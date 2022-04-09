import React, { useState } from 'react';
import './Login.css';
import app from '../../firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword  } from 'react-firebase-hooks/auth';

const Login = () => {
    const auth=getAuth(app);
    const googleProvider=new GoogleAuthProvider();
    const [ signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    let location = useLocation();
    const navigate = useNavigate();
    let from =location.state?.from?.pathname || '/';

    const handleFormSubmit=(e)=>{
        e.preventDefault();
    }

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, googleProvider)
        .then(()=>{
            console.log('logged in');
            navigate(from, { replace: true });
        })
        .catch(err=>{
            console.log(err.message);
        })
    }

    // email and password
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    // get email
    const getEmail=(e)=>{
        setEmail(e.target.value);
    };

    // get password
    const getPassword=(e)=>{
        setPassword(e.target.value);
    };


    return (
        <div>
            <form className='flex flex-col gap-5 m-2 mt-8 mx-auto' style={{width:'400px'}} onSubmit={handleFormSubmit}>
                <input type="email" placeholder='Your Email' onBlur={getEmail}/>
                <input type="password" placeholder='Your Password' onBlur={getPassword}/>
                <button type='submit' onClick={()=>signInWithEmailAndPassword(email, password)}>Login</button>
                <button onClick={handleGoogleSignIn}>Google</button>
            </form>
        </div>
    );
};

export default Login;