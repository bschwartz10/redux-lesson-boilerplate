const fakeDatabase = {
  todos: [
    {
      id: 1,
      text: 'hey',
      completed: true,
    },
    {
      id: 2,
      text: 'bye',
      completed: true,
    },
    {
      id: 3,
      text: 'lets go',
      completed: false
    },
  ]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = (filter) =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed)
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })
