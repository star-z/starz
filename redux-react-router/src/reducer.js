import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

const reducer = combineReducers({
  router: routerStateReducer
});

export { reducer }