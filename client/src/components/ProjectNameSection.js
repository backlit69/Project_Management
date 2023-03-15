import React from 'react';
import {Link} from 'react-router-dom';

const ProjectNameSection = () => {
    return (
        <>
            <div className="col-md-4 project-section">
                <p className="display-6">
                    Your Projects
                </p>
                <p className="bg-dark projectName p-4"><Link to="/project"><h4 class="projectBtn" style={{color: 'skyblue'}}>PROJECT 1</h4></Link> </p>
                <p className="bg-dark projectName p-4"><Link to="/project"><h4 class="projectBtn" style={{color: 'skyblue'}}>PROJECT 2</h4></Link> </p>
                <p className="bg-dark projectName p-4"><Link to="/project"><h4 class="projectBtn" style={{color: 'skyblue'}}>PROJECT 3</h4></Link> </p>
            </div>
        </>
    )
}
export default ProjectNameSection;