const filter = (state='SHOW_ALL', action) => {
  console.log(action)
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default filter
