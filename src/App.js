import React, { useState } from 'react';
import './App.css'
import Todo from './Todo';

const style = {
    todo: `
    h-screen w-screen 
    m-auto w-full max-w-[700px]`,
    todo__title: `
    my-12 text-center
    text-5xl text-green-500`,
    todo__count: `
    text-center p-3`,
    form: `
    flex justify-between items-center`,
    form__input: `
    border-y-2 w-full p-2 h-12`,
    form__button: `
    ml-4 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center `
}

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
    <div className={style.todo}>
        <h1 className={style.todo__title}>
            Todo CRUD
        </h1>
        <h2 className={style.todo__count}>We have 5 tasks</h2>

        <form className={style.form}>
            <input 
                className={style.form__input}
                value={input} 
                onChange={event => setInput(event.target.value)}
            />
            <button type='submit' 
                onClick={addTodo} 
                className={style.form__button}
                disabled={!input} //if the input is blank =>disable the button 
                 >Add
            </button>
        </form>
            <ul>
                {/* take from array todos */} 
                {todos.map(todo => (
                    <Todo task={todo}/>
                ))}
            </ul>
        
    </div>
  )
}

export default App;