import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import "./App.css";

const App = () => {
  
  const[todos, setTodos] = useState([]);
 
  const addTask = (todo) => {
   setTodos([...todos, {id: crypto.randomUUID(), title: todo }]);
  };

  

  const removeTask = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className='container'>
      <header>
        <h1>To-do App</h1>
      </header>

      <main className='wrapper'>
        <TodoInput add= {addTask}  />
        <TodoList todos= {todos} removeTodo={removeTask} />
      </main>
    </div>
  )
}

export default App;