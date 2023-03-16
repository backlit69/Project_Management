import React from "react";
import DashBoardNavbar from './DashBoardNavbar';
import NotesSection from "./NotesSection";
import ProjectNameSection from './ProjectNameSection';
import Deadline from "./Deadline";

const UserDashBoard = (props) => {
    console.log(props.user)
    
    return (
        <>
            <DashBoardNavbar user={props.user} setUser={props.setUser}/>
            <div className="container dashBoardContainer mt-5">
                <div className="row text-center note-section p-4">
                    <NotesSection/>
                    <ProjectNameSection/>
                    <Deadline/>
                </div>
            </div>
        </>
    )        
}
export default UserDashBoard;