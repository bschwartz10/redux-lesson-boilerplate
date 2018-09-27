import React from 'react';

const Todo = ({text, completed, onClick}) => {
  return(
    <li
      className={completed ? 'todo-completed' : ''}
      onClick={onClick}
    >
      {text}
    </li>
  )
}

export default Todo
