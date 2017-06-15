import React, { Component, PropTypes } from 'react';  
import { combineReducers, createStore, applyMiddleware } from 'redux';  
import { Provider } from 'react-redux';  
import thunk from 'redux-thunk';  
import * as reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import TodoApp from './todoApp';
import TodoAppRedux from './todoAppRedux';

const reducer = combineReducers(reducers); 
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default class App extends React.Component {  
  render() {
    return (
      <Provider store={store}>
        <TodoAppRedux />
      </Provider>
    );
  }
}