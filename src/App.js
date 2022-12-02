import React, { useState } from 'react';
import './App.css'
import Todo from './Todo';

function App() {
    // short time memory todo
    const [todos, setTodos] = useState([]);

    const [input, setInput] = useState ('');
    const addTodo = (event) => {
        event.preventDefault(); // don not refresh the page when we submit 
        setTodos([...todos, input ]); // fire off when click the button
        setInput(''); //clearing up input after add
    }
    
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl underline decoration-sky-500 '>
            Todo CRUD
        </h1>

        <form>
            <input 
                className='my-4 border-y-2'
                value={input} 
                onChange={event => setInput(event.target.value)}
            />
            <button type='submit' 
                onClick={addTodo} 
                className='bg-green-600 py-1 px-6 rounded-full'
                disabled={!input} //if the input is blank =>disable the button 
                 >Add
            </button>
        </form>
            <ul>
                {/* take from array todos */}
                {todos.map(todo => (
                    <Todo />
                ))}
            </ul>
        
    </div>
  )
}

export default App;