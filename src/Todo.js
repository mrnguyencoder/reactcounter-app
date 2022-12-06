import React from 'react';

const style = {
  toto__list:`
  flex p-4 my-2 justify-between`,
  row:`
  flex`,
  tasks:`
  ml-2`,
  button: `
  flex items-center cursor-pointer`,
}
function Todo({todo}) {
  return (
      <li className={style.toto__list}>
        <div className={style.row}>
          <input type="checkbox" />
          <p className={style.tasks}>
            {todo.todo}
          </p>
        </div>
        <button>Delete</button> 
      </li>
  )
}

export default Todo 