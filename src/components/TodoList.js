import React, {Component} from 'react'
import Todo from '../components/Todo'

const TodoList = ({todos, handleClick}) => {
    const displayTodos = todos.map((todo, i) => {
      return (
        <Todo
          {...todo}
          onClick={() => handleClick(todo.id)}
          key={i + 1} />
      )
    })

    return(
      <ul>
        {displayTodos}
      </ul>
    )
}

export default TodoList
