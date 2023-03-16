import {React, useState , useEffect} from 'react';
import DashBoardNavbar from './dashboard/DashBoardNavbar';
import './dashBoard.css';
import DashBoardSidebar from './DashBoardSidebar';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Login from './Login';
import Tasks from './Tasks';
import History from './History';
import Members from './Members';
import Discussion from './Discussion';
import About from './About';
import Updates from './Updates';
const ProjectView = (props) => {
    const [detect,setDetect] = useState(6)
    const setUser = props.setUser
    const user = props.user
    useEffect(()=>{
        console.log(detect)
    },[detect])

    return (
        <>
         <DashBoardNavbar user={props.user} setUser={props.setUser}/>

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

            <Routes>
                    <Route path="/projectView" element={user ? <ProjectView detect={detect} setDetect={setDetect}/> : <Login setUser={setUser} />}/>
                    <Route path="/projectView/task" element={user ? <Tasks detect={detect} setDetect={setDetect}/> : <Login setUser={setUser} />}/>
                    <Route path="/projectView/updates" element={user ? <Updates detect={detect} setDetect={setDetect}/> : <Login setUser={setUser} />}/>
                    <Route path="/projectView/history" element={user ? <History detect={detect} setDetect={setDetect}/> : <Login setUser={setUser} />}/>
                    <Route path="/projectView/members" element={user ? <Members detect={detect} setDetect={setDetect}/> : <Login setUser={setUser} />}/>
                    <Route path="/projectView/discussion" element={user ? <Discussion detect={detect} setDetect={setDetect}/> : <Login setUser={setUser} />}/>
                    <Route path="/projectView/about" element={user ? <About detect={detect} setDetect={setDetect}/> : <Login setUser={setUser} />}/>
            </Routes>  
            <div className="container mt-5 task">
                <div className="row">
                    <DashBoardSidebar  detect={detect} setDetect={setDetect} />
                    <div className="col-md-8 bg-dark">
                        <h1>Tasks</h1>
                    </div>
                </div>
            </div>

        </>    
    )
};
export default ProjectView;