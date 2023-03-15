import axios from 'axios';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

function Login(){
    const usernamePattern = /^[a-zA-Z0-9_]+$/
    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async (e)=>{
        e.preventDefault()
        let type;
        if(usernamePattern.test(user.email)){
            type= 'username'
        }
        else{
            type= 'email'
        }
        axios.post('http://127.0.0.1:5500/login',{log: user.email,password: user.password, type: type})
        .then((res)=>console.log(res)).catch((err)=>console.log(err))
    }

    return <>
    <Header/>
        <div className="container mt-5">
            <div className="row justify-content-center p-3">
                <div className="col-md-4 text-center p-1 p-3" id='card'>
                <form action="">
                    <h3 className='text-center text-light p-3 logndSign'>
                    <Link to="/">Login</Link> / <Link to="signup">Register</Link>
                    </h3>
                    <br />
                    <input type="text" name="email" className='m-3' value={user.email} placeholder='Username' onChange={handleChange}/>
                    <br />
                    <input type="password" name="password" className='m-3 mb-5' value={user.password} placeholder='Password' onChange={handleChange}/>
                    <br />
                    <button className='btn mb-3' onClick={login} type='submit'>Login</button><br />
                    <Link to="/"><p>Forgot Password?</p></Link>
                </form>
                </div>
            </div>
        </div>
    </>
}
export default Login;