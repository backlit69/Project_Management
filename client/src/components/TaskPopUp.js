import React, { useState } from "react";
import './dashBoard.css';

const TaskPopUp = () => {

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
            <button onClick={openPopUp} className="btn btn-secondary m-3">Update</button>

            {popUp?
            <div className="popup container-fluid ">
                <div className="popup-inner row">
                    <div className="col-md-12 shadow-lg p-3">
                        <h2>UPDATE TASKS</h2>
                        <hr />
                        <input type="text" name="" id=""  placeholder="Enter Project Name" className="bg-light text-dark fs-5"/>
                        <textarea type="text" name="" id=""  placeholder="Enter Task Details" className="bg-light text-dark fs-5 m-4" style={{width:'80%'}}/>
                        <br />
                       <h4>Enter the Task Deadline</h4>
                        <input type="date" name="" id="" className="bg-light text-dark fs-5"/>
                        <br />
                        <button onClick={closePopUp} className="btn btn-primary mt-5" style={{width:'20%'}}>Update</button>
                        <button onClick={closePopUp} className="btn btn-primary mt-5" style={{width:'20%'}}>Close</button>
                    </div>
                </div>
            </div>:""}
    </>)
}
export default TaskPopUp; 