import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodoes = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed)
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodoes(state.todosReducer.todos, state.filterReducer)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
