import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import AddTodoFormContainer from '../../containers/AddTodoFormContainer'
import TodoListContainer from '../../containers/TodoListContainer'
import FilterMenuContainer from '../../containers/FilterMenuContainer'
import { fetchTodos } from '../../todoData'
import { fetchTodosBegin, fetchTodosSuccess, fetchTodosFailure } from '../../actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render(){
    return (
      <div className='App'>
        <AddTodoFormContainer />
        <FilterMenuContainer />
        <TodoListContainer />
      </div>
    )
  }
}

export default App
