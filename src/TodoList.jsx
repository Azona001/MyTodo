import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({todos, removeTodo}) => {
    return (
    <div className= 'list' >
        {todos.map((todo) =>(
            < TodoItem key={todo.id} {...todo} removeTodo={removeTodo}/> 
            ))}
          
    </div>
  )
}

export default TodoList;