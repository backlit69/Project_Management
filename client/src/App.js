import {React,useState,useEffect} from 'react';
import UserDashBoard from './components/dashboard/UserDashBoard';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProjectView from './components/projectView';

const App = () => {
    const [user,setUser] = useState(JSON.parse(window.localStorage.getItem("project-Management")))
    useEffect(()=>{
        window.localStorage.setItem("project-Management",JSON.stringify(user))
    },[user])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={user ? <UserDashBoard user={user} setUser={setUser}/> : <Login setUser={setUser} />}/>
                    <Route path="/signup" element={user ? <UserDashBoard user={user} setUser={setUser}/> : <SignUp/>}/>
                    <Route path="/dashboard" element={user ? <UserDashBoard user={user} setUser={setUser}/> : <Login setUser={setUser} />}/>
                    <Route path="/projectView/*" element={user ? <ProjectView user={user} setUser={setUser}/> : <Login setUser={setUser} />}/>
                    {/* <Route path="/task" element={user ? <Tasks/> : <Login setUser={setUser} />}/>
                    <Route path="/updates" element={user ? <Updates/> : <Login setUser={setUser} />}/>
                    <Route path="/history" element={user ? <History/> : <Login setUser={setUser} />}/>
                    <Route path="/members" element={user ? <Members/> : <Login setUser={setUser} />}/>
                    <Route path="/discussion" element={user ? <Discussion/> : <Login setUser={setUser} />}/>
                    <Route path="/about" element={user ? <About/> : <Login setUser={setUser} />}/> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
