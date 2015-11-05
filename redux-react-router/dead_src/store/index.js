import { createStore, compose, combineReducers } from 'redux';
import reducer from '../reducers/index.js'
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';


export const store = compose(
  reduxReactRouter({ createHistory }),
  devTools()
)(createStore)(reducer);