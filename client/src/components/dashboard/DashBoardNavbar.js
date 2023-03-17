import React from "react";
import AddProjectPopUp from "./AddProjectPopUp";
import user from "../images/user.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const DashBoardNavbar = (props) => {
    const history = useNavigate()
    const logout = () =>{
        window.localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');
        props.setUser()
    }

    

    return (
        <>
            <div className="container-fluid bg-dark p-1">
                <div className="row">
                    <div className="col-md-9 mt-2">
                        <h1><AddProjectPopUp/></h1>
                    </div>
                    <div className="col-md-3 mt-2">
                        <button className="btn" onClick={logout}>
                            LogOut <img src={user} alt="" className="navImg m-2" />
                        </button> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashBoardNavbar;