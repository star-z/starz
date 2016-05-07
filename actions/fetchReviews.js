import * as constants from '../constants';
import api from '../lib/request';
import each from 'lodash/each';
import * as actions from './';
import { normalize, Schema, arrayOf } from 'normalizr'
const reviewSchema = new Schema('reviews')

export function fetchReviews() {
  return (dispatch, getState) => {
    dispatch(actions.receiveFetching({ reviews: true }))
    api.get( 'http://localhost:4000' + '/api/reviews').end().then(res => {
      const { body } = res
      const response = normalize(body, { reviews: arrayOf(reviewSchema) })
      each(response.entities, (values, key) => dispatch(actions.receiveEntities(key, values)))
      dispatch(actions.receiveMeta('reviewsMeta', response.result.reviews))
      dispatch(actions.receiveFetching({ reviews: false }))
    })
  }
}
