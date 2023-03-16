import {React,useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';

const DashBoardSidebar = (props) => {
    const history = useNavigate()
    //const [marks,setMarks] = useState(6)
    //const routeArray=["tasks","updates","history","members","discussion","about"]
    const displaySection = (event) =>{
            //setMarks()
            //history("/projectView/"+routeArray[number-1])
            const {className,value1}=event.target
            console.log(value1)
            console.log(typeof event.target)
            console.log(event.target["value1"])
            props.setDetect(event.target.value)

    }
    

    return (
        <>
           <div className="col-md-4 bg-secondary">
                <h4 className= {`p-3 project-works bg-${(props.detect==1)?'dark text-light':'light text-dark'} `} value1="1" onClick={displaySection}>Tasks</h4>
                <h4 className={`p-3 project-works bg-${(props.detect==2)?'dark text-light':'light text-dark'} `} value1="2" onClick={displaySection}>Updates</h4>
                <h4 className={`p-3 project-works bg-${(props.detect==3)?'dark text-light':'light text-dark'} `} value1="3" onClick={displaySection}>History</h4>
                <h4 className={`p-3 project-works bg-${(props.detect==4)?'dark text-light':'light text-dark'} `} value1="4" onClick={displaySection}>Members</h4>
                <h4 className={`p-3 project-works bg-${(props.detect==5)?'dark text-light':'light text-dark'}`} value1="5" onClick={displaySection}>Discussion</h4>
                <h4 className={`p-3 project-works bg-${(props.detect==6)?'dark text-light':'light text-dark'} `} value1="6"  onClick={displaySection}>About</h4>
            </div>
        </>
    )
}
export default DashBoardSidebar;