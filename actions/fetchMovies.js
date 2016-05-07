import * as constants from '../constants';
import api from '../lib/request';
import each from 'lodash/each';
import * as actions from './';
import { normalize, Schema, arrayOf } from 'normalizr'
const movieSchema = new Schema('movies')

export function fetchMovies() {
  return (dispatch, getState) => {
    dispatch(actions.receiveFetching({ movies: true }))
    api.get( 'http://localhost:4000' + '/api/movies').end().then(res => {
      const { body } = res
      const response = normalize(body, { movies: arrayOf(movieSchema) })
      each(response.entities, (values, key) => dispatch(actions.receiveEntities(key, values)))
      dispatch(actions.receiveMeta('moviesMeta', response.result.movies))
      dispatch(actions.receiveFetching({ movies: false }))
    })
  }
}
