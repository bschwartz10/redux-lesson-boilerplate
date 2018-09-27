import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers'
import './index.css';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider store={ store } >
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
