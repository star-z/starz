import { createStore, compose, combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

export const reducer = combineReducers({
  router: routerStateReducer
});