import React, { Component, PropTypes } from 'react';  
import { combineReducers, createStore, applyMiddleware } from 'redux';  
import { Provider } from 'react-redux';  
import thunk from 'redux-thunk';  
// import * as reducers from '../reducers';

import TodoApp from './todoApp';

const reducer = (state => state);  
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);  
const store = createStoreWithMiddleware(reducer);

export default class App extends React.Component {  
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}