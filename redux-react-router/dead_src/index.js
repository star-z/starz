/*
import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import { routes } from './Routes';
import { App } from './App';

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
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

*/


import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, combineReducers } from 'redux';

import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  pushState
} from 'redux-router';

import { Route, Link } from 'react-router';
import { Provider, connect } from 'react-redux';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { createHistory } from 'history';

import { Parent } from './Parent';
import { Child } from './Child';
import { Root } from './Root';


/* connect */
@connect((state) => ({}))
class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(pushState(null, '/parent/child/custom'));
  }


  render() {
    const links = [
      '/',
      '/parent?foo=bar',
      '/parent/child?bar=baz',
      '/parent/child/123?baz=foo'
    ].map(l =>
      <p>
        <Link to={l}>{l}</Link>
      </p>
    );

    return (
      <div>
        <h1>App Container</h1>
        {links}

        <a href="#" onClick={this.handleClick}>
          /parent/child/custom
        </a>
        {this.props.children}
      </div>
    );
  }
}


const reducer = combineReducers({
  router: routerStateReducer
});

const store = compose(
  reduxReactRouter({ createHistory }),
  devTools()
)(createStore)(reducer);



ReactDOM.render(<Root />, document.getElementById('root'));