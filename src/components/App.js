import React, { useState } from "react";

function App(){
    const [list,setList] = useState("");
    const [item,setItem] = useState([]);
    function changeHandle(event){
        const addList=event.target.value;
        setList(addList);
    }
    function handleClick(){
        setItem((prevItem) =>{
            return [...prevItem,list]
        });
        setList("");
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do-List</h1>
            </div>
            <div className="form">
                <input onChange={changeHandle}type="text" value={list}/>
                <button onClick={handleClick}>Add</button>
            </div>
            <div>
                <ul>
                    {item.map((items) =>{
                        return <li>{items}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;