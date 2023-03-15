import React from 'react';
import {Link} from 'react-router-dom';

const DashBoardSidebar = () => {
    return (
        <>
           <div className="col-md-4 bg-secondary">
                <h4 className='p-3 project-works bg-dark text-light'><Link to="/task">Task</Link></h4>
                <h4 className='p-3 project-works bg-dark text-light'><Link to="/updates">Updates</Link></h4>
                <h4 className='p-3 project-works bg-dark text-light'><Link to="/history">History</Link></h4>
                <h4 className='p-3 project-works bg-dark text-light'><Link to="/members">Members</Link></h4>
                <h4 className='p-3 project-works bg-dark text-light'><Link to="/discussion">Discussion</Link></h4>
                <h4 className='p-3 project-works bg-dark text-light'><Link to="/about">About</Link></h4>
            </div>
        </>
    )
}
export default DashBoardSidebar;