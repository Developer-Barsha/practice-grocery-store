import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';

const Register = () => {
    const auth=getAuth(app);
    const [ createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    //handle form submit
    const handleFormSubmit=(e)=>{
        e.preventDefault();
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
            <form className='flex flex-col gap-5 m-2 mt-8 mx-auto' onSubmit={handleFormSubmit} style={{width:'400px'}}>
                {/* <input type="text" placeholder='Your Name'/> */}
                <input type="email" placeholder='Your Email' onBlur={getEmail}/>
                <input type="password" placeholder='Your Password' onBlur={getPassword}/>
                <button type='submit' onClick={()=>createUserWithEmailAndPassword(email, password)}>Register</button>
            </form>
        </div>
    );
};

export default Register;