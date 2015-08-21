import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import UgcApp from '../common/containers/UgcApp';
import * as reducers from '../common/reducers';

const ugcApp = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(ugcApp);

React.render(
  <Provider store={store}>
    {() => <UgcApp />}
  </Provider>,
  document.getElementById('root')
);
