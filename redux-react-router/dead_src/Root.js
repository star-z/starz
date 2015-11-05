import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import store from './store/index.js'
import { ReduxRouter } from 'redux-router';
import { Route, Link } from 'react-router';
import { App } from './App'
import { Parent } from './Parent'
import { Child } from './Child'

import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';


export class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            <Route path="/" component={App}>
              <Route path="parent" component={Parent}>
                <Route path="child" component={Child} />
                <Route path="child/:id" component={Child} />
              </Route>
            </Route>
          </ReduxRouter>
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}