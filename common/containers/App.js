import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import UgcApp from './UgcApp';
import * as reducers from '../reducers';

let ugcApp = combineReducers(reducers);
let store = createStore(ugcApp);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <UgcApp />}
      </Provider>
    );
  }
}
