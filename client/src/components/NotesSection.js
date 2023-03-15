import React from 'react';
import UserNotes from './UserNotes';

const NotesSection = () => {
    return (
        <>
            <div className="col-md-4">
                <p className="display-6 ">
                    Notes
                </p> 
                <UserNotes />
            </div>
        </>
    )
}
export default NotesSection;