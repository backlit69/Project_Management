import React, { useState } from 'react';
import Notes from './Notes';
import "../dashBoard.css";

const UserNotes = () =>{
    const [inputList,setInputList] = useState("");
    const [items,setItems] = useState([]);
    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }
    const listOfItems = () =>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        });
        setInputList("");
    }

    const deleteItem = (id) =>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!== id;
            })
        })
    }
    
    return (
        <>
            <input type="text" placeholder='Add some note for your project...' onChange={itemEvent} value={inputList} className="noteInput"/>
                <button className='btn notebtn' style={{color: 'white',width: '15%'}} onClick={listOfItems}>Add</button>
                <ol>
                    {items.map((itemVal,index)=>{
                        return <Notes 
                        key={index} 
                        text={itemVal} 
                        id={index}
                            onSelect={deleteItem}
                        />
                })}
                </ol>
        </>
    )
}
export default UserNotes;
