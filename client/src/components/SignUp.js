import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

function SignUp(){
    // const namePattern = /^[a-z ,.'-]+$/
    // const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/
    // const usernamePattern = /^[a-zA-Z0-9_]+$/
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = (e)=>{
        e.preventDefault();
        const {name, username, email, password, reEnterPassword}=user
        // if(namePattern.test(name)&&emailPattern.test(email)&&usernamePattern.test(username)&&password===reEnterPassword){
            axios.post("http://127.0.0.1:5500/register",{
                name,
                username,
                email,
                password
            }).then((res)=>console.log(res)).catch((err)=>console.log(err))
        // }
    }

    return <>
    <Header/>
        <div className="container mt-5">
            <div className="row justify-content-center p-3">
                <div className="col-md-4 text-center p-1 p-3" id='card'>
                    <form action="">
                        <h3 className='text-center text-light p-3 logndSign'>
                        <Link to="/">Login</Link> / <Link to="/signup">Register</Link>
                        </h3>
                        <br />
                        <input type="text" name="name" className='m-3' value={user.name} placeholder='Name' onChange={handleChange}/>
                        <input type="text" name="username" className='m-3' value={user.username} placeholder='Username' onChange={handleChange}/>
                        <input type="email" name="email" className='m-3' value={user.email} placeholder='Email' onChange={handleChange}/>
                        <input type="password" name="password" className='m-3' value={user.password} placeholder='Password' onChange={handleChange}/>
                        <input type="password" name="reEnterPassword" className='m-3 mb-5' value={user.reEnterPassword} placeholder='Confirm Password' onChange={handleChange}/>
                        <button className='btn mb-3' onClick={register}>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default SignUp;