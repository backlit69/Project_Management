import axios from 'axios';
import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Header from './Header';

function Login(props){
    const usernamePattern = /^[a-zA-Z0-9_]+$/
    const history = useNavigate();
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

        
        let obj = {log: user.email, password: user.password, type: type}
        
        console.log(obj)
        axios.post('http://127.0.0.1:5500/login',obj)
                .then((response)=>{
                        console.log(response.data)
                        if(response.data.status==200){
                            console.log(response.data.message)
                            axios.post('http://127.0.0.1:5500/dashboard',{})
                            .then((response_dash)=>{
                                history('/dashboard')
                                props.setUser(response_dash.data.message)
                            })
                            .catch((err)=>{
                    console.log(err)
                })
                            
                        }
                        else{
                            console.log("wierd output")
                        }
                })
                .catch((err)=>{
                    console.log(err)
                })
        
       
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