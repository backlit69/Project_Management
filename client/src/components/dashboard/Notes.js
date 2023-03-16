import React from 'react';

const Notes = (props) =>{
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12  me-4" align="left">
                    <li style={{listStyle:"none"}} className="p-2 "><button className="btn notebtn" style={{width:'20%', marginRight: '10px'}} onClick={()=>{
                    props.onSelect(props.id);
                    }}>X</button>{props.text}</li>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notes;