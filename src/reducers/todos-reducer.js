const initialState = {
  todos: [],
  loading: false,
  error: null
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {id: action.id, text: action.text, completed: false}]
      }
    case 'TOGGLE_TODO':
      const todos = state.todos.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }
        return Object.assign({}, todo, {completed: !todo.completed})
      })
      return {
        ...state,
        todos: todos
      }
    case 'FETCH_TODOS_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: action.todos
      }
    case 'FETCH_TODOS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
        todos: []
      }
    default :
      return state
  }
}

export default todos
