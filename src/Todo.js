import React from 'react';

function Todo(props) {
  return (
      <li className={style.toto__list}>
        <div className={style.row}>
          <input type="checkbox" />
          <p className={style.tasks}>
          {props.task}
          </p>
        </div>
        
      </li>
  )
}

export default Todo 