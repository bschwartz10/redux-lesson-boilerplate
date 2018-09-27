export const addTodo = (text, id) => {
  return {
    type: 'ADD_TODO',
    text,
    id
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export const fetchTodosBegin = () => {
  return {
    type: 'FETCH_TODOS_BEGIN'
  }
}

export const fetchTodosSuccess = (todos) => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos
  }
}

export const fetchTodosFailure = (error) => {
  return {
    type: 'FETCH_TODOS_FAILURE',
    error
  }
}
