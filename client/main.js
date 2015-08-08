import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import UgcApp from '../common/containers/UgcApp';
import * as reducers from '../common/reducers';

let ugcApp = combineReducers(reducers);
let store = createStore(ugcApp);

React.render(
  <Provider store={store}>
    {() => <UgcApp />}
  </Provider>,
  document.getElementById('root')
);
