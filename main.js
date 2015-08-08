import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import UgcApp from './containers/UgcApp';
import * as reducers from './reducers';

let ugcApp = combineReducers(reducers);
let store = createStore(ugcApp);

React.render(
  <Provider store={store}>
    {() => <UgcApp />}
  </Provider>,
  document.getElementById('root')
);
