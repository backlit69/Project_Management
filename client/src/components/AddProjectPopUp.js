import React, { useState } from "react";
import './dashBoard.css';
import bell from "./images/bell.png";
import add from "./images/add.png";

const AddProjectPopUp = () => {

    const [popUp,setPopUp] = useState(false);
    const [bgcolor,setBgColor] = useState(false);


    const openPopUp = () => {
        setPopUp(true);
        setBgColor(!bgcolor);
    }
    const closePopUp = () => {
        setPopUp(false);
        setBgColor(false);
    }
    return (<>
            <h1><img src={add} alt="" className="navImg m-2" onClick={openPopUp}/><img src={bell} alt="" className="navImg m-2"/></h1>
            {popUp?
            <div className="popup container-fluid">
                <div className="popup-inner row">
                    <div className="col-md-12 shadow-lg p-3">
                        <h2>ADD YOUR PROJECT HERE</h2>
                        <hr />
                        <input type="text" name="" id=""  placeholder="Enter Project Name" className="bg-light text-dark fs-5"/>
                        <input type="text" name="" id=""  placeholder="Enter Project Description" className="bg-light text-dark fs-5"/>
                        <br />
                        <button onClick={closePopUp} className="btn btn-primary text-light mt-5" style={{color: "red",width:"20%"}}>Add</button>
                        <button onClick={closePopUp} className="btn btn-primary text-light mt-5" style={{color: "red",width:"20%"}}>Close</button>
                    </div>
                </div>
            </div>:""}
    </>)
}
export default AddProjectPopUp;