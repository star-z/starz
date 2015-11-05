import React, { Component } from 'react';
import { render } from 'react-dom';

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';

import { createHistory } from 'history';
import { Route } from 'react-router'

import { App } from './App';


// Configure routes
const routes = (
  <Route path="/" component={App}>
    <Route path="parent" component={App}>
      <Route path="child" component={App} />
      <Route path="child/:id" component={App} />
    </Route>
  </Route>
);

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
const reducer = combineReducers({
  router: routerStateReducer
});

// Compose reduxReactRouter with other store enhancers
const store = compose(
  applyMiddleware(),
  reduxReactRouter({
    routes,
    createHistory
  })
  //devTools()
)(createStore)(reducer);


/* not sure about this part */

import { connect } from 'react-redux';
import { pushState } from 'redux-router';

connect(
  // Use a selector to subscribe to state
  state => ({ q: state.router.location.query.q }),
  { pushState }
)(App);


class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter />
        </div>
      </Provider>
    )
  }
}


render(<App />, document.getElementById('root'));
