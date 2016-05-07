import api from '../lib/request';
import * as actions from './';

export function init(dispatch) {
  return dispatch => {
    dispatch(actions.fetchReviews())
    dispatch(actions.fetchMovies())
  }
}
