import { reducer } from './reducer'
import { compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import { devTools } from 'redux-devtools';
import { createStore } from 'redux';

const store = compose(
  reduxReactRouter({ createHistory }),
  devTools()
)(createStore)(reducer);

export { store }