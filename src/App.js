import React, { useState } from 'react';
import './App.css'

function App() {
    // short time memory todo
    const [todos, setTodos] = useState(['coding', 'shopping']);

    const [input, setInput] = useState ('');
    const addTodo = (event) => {
        setTodos([...todos, input ]); 
    }
    
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl underline decoration-sky-500 '>
            Todo CRUD
        </h1>
        <input className='my-4 border-y-2'
            value={input} onChange={event => setInput(event.target.value)}/>
        <button onClick={addTodo} className='bg-green-600 py-1 px-6 rounded-full'>Add</button>
        <ul>
            {/* take from array todos */}
            {todos.map(todo => (
                <li>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default App;