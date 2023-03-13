import React from 'react';
import {Link} from 'react-router-dom';

function Login(){
    return <>
        <div className="container mt-5">
            <div className="row justify-content-center p-3">
                <div className="col-md-4 text-center p-1 p-3" id='card'>
                <form action="">
                    <h3 className='text-center text-light p-3 logndSign'>
                    <Link to="/">Login</Link> / <Link to="signup">Register</Link>
                    </h3>
                    <br />
                    <input type="text" name="" className='m-3' placeholder='Username'/>
                    <br />
                    <input type="password" name="" className='m-3 mb-5' placeholder='Password'/>
                    <br />
                    <button className='btn mb-3' type='submit'>Login</button><br />
                    <Link to="/"><p>Forgot Password?</p></Link>
                </form>
                </div>
            </div>
        </div>
    </>
}
export default Login;
