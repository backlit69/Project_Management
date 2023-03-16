import {React,useState,useEffect} from 'react';
import axios from 'axios';
import UserDashBoard from './components/dashboard/UserDashBoard';
import { BrowserRouter, Routes, Route, useNavigation} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProjectView from './components/projectView';

const App = () => {
    const [user,setUser] = useState()
    
    useEffect(()=>{
        // axios.defaults.withCredentials=true
        console.log("starting a call")
        axios.post('http://127.0.0.1:5500/isLoggedIn',{})
        .then((response)=>{
            console.log(response)
            if(response.data.status==200){
                // axios.post('http://127.0.0.1:5500/dashboard',{})
                // .then((response_dash)=>{
                //         if(response_dash.status==200)
                //         setUser(response_dash.message)
                //         else{
                //             console.log("wierd output")
                //         }
                // })
                // .catch((err)=>{
                //     console.log(err)
                // })
                setUser(response)
            }
            console.log(response.status)
    })
    .catch((err)=>
        console.log(err)
    )


    },[])
    // const getToken = async () => {
    //     console.log("in async function")
    //     try{
    //         const response = await axios.post(
    //             'http://127.0.0.1:5500/isLoggedIn',{}  
    //         );
    //         if(response.data.status==200)
    //         setUser(response)
    //        else console.log(response+"hi");
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
        
        
    // };
    
   
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={user ? <UserDashBoard user={user} setUser={setUser}/> : <Login setUser={setUser} />}/>
                    <Route path="/signup" element={user ? <UserDashBoard user={user} setUser={setUser}/> : <SignUp/>}/>
                    <Route path="/dashboard" element={user ? <UserDashBoard user={user} setUser={setUser}/> : <Login setUser={setUser} />}/>
                    <Route path="/projectView/*" element={user ? <ProjectView user={user} setUser={setUser}/> : <Login setUser={setUser} />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
