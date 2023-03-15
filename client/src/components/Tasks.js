import React from 'react';
import DashBoardNavbar from './DashBoardNavbar';
import './dashBoard.css';
import DashBoardSidebar from './DashBoardSidebar';

const Tasks = () => {
    return (
        <>
            <DashBoardNavbar/>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-8 display-6">
                        PROJECT NAME
                    </div>
                    <div className="col-md-3 p-1 m-1">
                        <button className="btn belowNavbar">Assign</button>
                        <button className="btn belowNavbar">Update</button>
                    </div>
                </div>
            </div>


            <div className="container mt-5 task">
                <div className="row">
                    <DashBoardSidebar />
                    <div className="col-md-8 bg-dark">
                        <h1>Tasks</h1>
                    </div>
                </div>
            </div>

            

        </>
    )
};
export default Tasks;