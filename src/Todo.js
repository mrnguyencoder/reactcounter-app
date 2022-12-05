import React from 'react';

function Todo(props) {
  return (
    <div>
        <li className={style.toto__list}>{props.task}</li>
    </div>
  )
}

export default Todo 