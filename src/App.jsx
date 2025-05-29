import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import "./App.css";
import 'animate.css';

const App = () => {
  
  const[todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  }
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
 
  const addTask = (todo) => {
   setTodos([...todos, {id: crypto.randomUUID(), title: `${todo }`}]);
  };

  
  const removeTask = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className='container'>
      <div className='header'>
        <header>
          <h1>To-do App</h1>
          <h3>Plan through the day without stress!</h3>
        </header>
      </div>

      <main className='wrapper'>
        <TodoInput add= {addTask}  />
        <TodoList todos= {todos} removeTodo={removeTask} />
      </main>
    </div>
  )
}

export default App;