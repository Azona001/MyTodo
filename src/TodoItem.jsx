import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import Check from './Check';

const TodoItem = ({id, title, removeTodo}) => {

    const[completed, setCompleted] = useState(false);

    const handleCheck= () => {
         if(!completed) {
            setCompleted(true);
            
         } else {
            setCompleted(false);
        
         }
    }

  return (
    <div className='item'>
    <ul>  
    <li key= {id} className={completed? 'line': " "} complete={completed} >
        < Check complete= {completed} handleCheck= {handleCheck}  />
        {title[0].toUpperCase() + title.slice(1)}
        <button 
        type='button' 
        className={completed? " " : "hidden"} 
        onClick={() => removeTodo(id)} 
        complete= {completed} >
            <MdDelete className='delete' />
            </button>
        </li>
    
    </ul>
    </div>
  );
}

export default TodoItem;


