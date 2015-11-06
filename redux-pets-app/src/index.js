import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { ReduxRouter } from 'redux-router';
import { Route, Link } from 'react-router';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import { App } from './App'
import { Parent } from './Parent'
import { Child } from './Child'
import { store } from './store'

class Root extends Component {
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

ReactDOM.render(<Root />, document.getElementById('root'));