import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import UgcApp from './UgcApp';
import ExampleRouteComponent from '../components/ExampleRouteComponent';
import * as reducers from '../reducers';

const ugcApp = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(ugcApp);

export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() =>
            <Router history={this.props.history}>
              <Route path='/' component={UgcApp} />
              <Route path='test' component={ExampleRouteComponent} />
            </Router>
          }
        </Provider>
      </div>
    );
  }
}
