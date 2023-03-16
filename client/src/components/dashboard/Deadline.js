import React from 'react';
import UpdateTaskPopUp from './UpdateTaskPopUp';
import TaskPopUp from './TaskPopUp';

const Deadline = () => {
    return (
        <>
            <div className="col-md-4 deadline-section ">
                <p className="display-6">
                    DeadLines
                </p>
                <p className="text-light bg-dark"  >
                    Update Due Task 
                <UpdateTaskPopUp/></p>
                <p className="text-light bg-dark" ><UpdateTaskPopUp/></p>
                <p className="text-light  bg-dark" ><TaskPopUp/></p>
            </div>
        </>
    )
}
export default Deadline;