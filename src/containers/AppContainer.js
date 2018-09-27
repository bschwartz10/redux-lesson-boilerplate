import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodosBegin, fetchTodosSuccess, fetchTodosFailure } from '../actions'
import App from '../components/App/App'
import { fetchTodos } from '../todoData'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => {
      dispatch(fetchTodosBegin())
        return fetchTodos('all')
      .then((todos) => {
      dispatch(fetchTodosSuccess(todos))
      return todos
    })
      .catch((error) => {
        dispatch(fetchTodosFailure(error))
      })
    }
  }
}


export default connect(null, mapDispatchToProps)(App);
