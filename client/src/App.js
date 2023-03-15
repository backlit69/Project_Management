// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import SignUp from './components/SignUp';

// function App(){
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Login />}/>
//                 <Route path="/signup" element={<SignUp />}/>
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default App;


import React from 'react';
import UserDashBoard from './components/UserDashBoard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from './components/Tasks';
import Updates from './components/Updates';
import History from './components/History';
import Members from './components/Members';
import Discussion from './components/Discussion';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/dashboard" element={<UserDashBoard />}/>
                    <Route path="/project/" element={<Tasks />}/>
                    <Route path="/task" element={<Tasks />}/>
                    <Route path="/updates" element={<Updates />}/>
                    <Route path="/history" element={<History />}/>
                    <Route path="/members" element={<Members />}/>
                    <Route path="/discussion" element={<Discussion />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
