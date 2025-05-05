import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";


const TodoInput = ({ add }) => {
    const[title, setTitle] = useState("");

    const handleChange = (e) => {
       setTitle(e.target.value);
    };   

    const handleAdd = (e) => {
        e.preventDefault();
        add(title);
        setTitle("");
    };

  return (
    <div className='search'>
        <form name= "addTask" className="taskform" id= "taskForm" onSubmit= { handleAdd } >
        <input 
        type="text" 
        name= "task" 
        placeholder="Add task..." 
        value={title} 
        required
        onInput={ handleChange }
        />
        <button type="submit"><span>ADD</span><IoMdAdd className="add"/></button>
        </form>
    </div>
  );
}

export default TodoInput;